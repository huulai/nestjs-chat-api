import { FriendStatus } from './../@generated/index';
import { UserService } from './../user/user.service';
import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateFriendInput } from './dto/createFriend.input';
import { PubSub } from 'graphql-subscriptions';
import { PubSubEnum } from 'src/pubSub/enums/pubSub.enums';
import { FriendActionEnum } from './enums/FriendAction.enum';

@Injectable()
export class FriendsService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) {}

  async create(friendCreateInput: CreateFriendInput) {
    const { email, senderId } = friendCreateInput;
    const receiver = await this.userService.findOneByEmail(email);
    if (!receiver) throw new ForbiddenException('User does not exist');

    if (receiver.id === senderId)
      throw new BadRequestException('Cannot Add Yourself');

    const isFriends = await this.isFriends(senderId, receiver.id);
    if (isFriends) throw new ConflictException('Friend already exists');

    const friend = await this.prisma.friend.create({
      data: { senderId: senderId, receiverId: receiver.id },
      include: {
        receiver: true,
        sender: true,
      },
    });
    this.pubSub.publish(PubSubEnum.FRIEND_ACTION, {
      friendAction: {
        action: FriendActionEnum.SENT_FRIEND_REQUEST,
        friend,
      },
    });
    return friend;
  }

  async isFriends(userOneId: number, userTwoId: number) {
    const res = await this.prisma.friend.findFirst({
      where: {
        OR: [
          {
            senderId: userTwoId,
            receiverId: userOneId,
          },
          {
            senderId: userOneId,
            receiverId: userTwoId,
          },
        ],
      },
    });
    return res;
  }

  findAll(userId: number) {
    return this.prisma.friend.findMany({
      where: {
        OR: [
          {
            receiverId: userId,
          },
          {
            senderId: userId,
          },
        ],
      },
      include: {
        receiver: true,
        sender: true,
      },
    });
  }

  async update(id: number, friendStatus: FriendStatus) {
    const friend = await this.prisma.friend.update({
      where: { id },
      data: { status: friendStatus },
      include: {
        receiver: true,
        sender: true,
      },
    });
    this.pubSub.publish(PubSubEnum.FRIEND_ACTION, {
      friendAction: {
        action: FriendActionEnum.UPDATE_FRIEND,
        friend,
      },
    });
    return friend;
  }

  async remove(id: number) {
    const friend = await this.prisma.friend.delete({
      where: { id },
      include: {
        sender: true,
        receiver: true,
      },
    });
    this.pubSub.publish(PubSubEnum.FRIEND_ACTION, {
      friendAction: {
        action: FriendActionEnum.DELETED_FRIEND,
        friend,
      },
    });
    return friend;
  }
}
