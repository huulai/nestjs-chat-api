import { CreateOneUserArgs, UpdateOneUserArgs } from './../@generated/index';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async find(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createOneUserArgs: CreateOneUserArgs) {
    return this.prisma.user.create(createOneUserArgs).catch((error) => {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('duplicate email');
        }
      }
    });
  }

  async update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }
}
