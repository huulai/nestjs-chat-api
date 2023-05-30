import { User } from './../@generated/index';
import { userIdParams } from './../auth/decorators/userIdParams.decorator';
import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  user(@userIdParams() userId: number) {
    return this.userService.find(userId);
  }
}
