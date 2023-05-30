import { UserService } from './../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsResolver } from './friends.resolver';

@Module({
  providers: [FriendsResolver, FriendsService, PrismaService, UserService],
})
export class FriendsModule {}
