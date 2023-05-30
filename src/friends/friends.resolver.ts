import { userIdParams } from './../auth/decorators/userIdParams.decorator';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FriendsService } from './friends.service';
import { Friend, FriendStatus } from '../@generated';

@Resolver(() => Friend)
export class FriendsResolver {
  constructor(private readonly friendsService: FriendsService) {}

  @Mutation(() => Friend, { name: 'addFriend' })
  createFriend(
    @Args('receiverEmail') receiverEmail: string,
    @userIdParams() senderId: number,
  ) {
    const input = {
      email: receiverEmail,
      senderId,
    };
    return this.friendsService.create(input);
  }

  @Query(() => [Friend], { name: 'friends' })
  findAll(@userIdParams() userId: number) {
    return this.friendsService.findAll(userId);
  }

  @Mutation(() => Friend)
  updateFriend(
    @Args('id', { type: () => Int }) id: number,
    @Args('status') friendStatus: FriendStatus,
  ) {
    return this.friendsService.update(id, friendStatus);
  }

  @Mutation(() => Friend)
  removeFriend(@Args('id', { type: () => Int }) id: number) {
    return this.friendsService.remove(id);
  }
}
