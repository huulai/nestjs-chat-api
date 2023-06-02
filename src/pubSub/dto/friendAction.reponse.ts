import { Field, ObjectType } from '@nestjs/graphql';
import { Friend } from '../../@generated';

@ObjectType()
export class FriendActionResponse {
  @Field()
  action: string;

  @Field(() => Friend)
  friend: Friend;
}
