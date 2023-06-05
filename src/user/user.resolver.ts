import { User } from './../@generated/index';
import { userIdParams } from './../auth/decorators/userIdParams.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UpdateUserInfoInput } from './dto/updateUserInfo.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  user(@userIdParams() userId: number) {
    return this.userService.find(userId);
  }

  @Mutation(() => User, { name: 'updateUserInfo' })
  updateUserInfo(
    @userIdParams() userId: number,
    @Args('updateUserInfoInput') userInfo: UpdateUserInfoInput,
  ) {
    console.log({ userInfo });
    return this.userService.update({
      where: { id: userId },
      data: { ...userInfo },
    });
  }
}
