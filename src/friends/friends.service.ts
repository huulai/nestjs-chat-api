import { FriendStatus } from './../@generated/index';
import { UserService } from './../user/user.service';
import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateFriendInput } from './dto/createFriend.input';

@Injectable()
export class FriendsService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
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

  update(id: number, friendStatus: FriendStatus) {
    return this.prisma.friend.update({
      where: { id },
      data: { status: friendStatus },
      include: {
        receiver: true,
        sender: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.friend.delete({ where: { id } });
  }
}
