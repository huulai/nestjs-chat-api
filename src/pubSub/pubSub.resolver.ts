import { Inject } from '@nestjs/common';
import { Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PubSubEnum } from './enums/pubSub.enums';
import { FriendActionResponse } from './dto/friendAction.reponse';

@Resolver()
export class PubSubResolver {
  constructor(@Inject('PUB_SUB') private pubSub: PubSub) {}

  @Subscription(() => String)
  test() {
    return this.pubSub.asyncIterator('TEST');
  }

  @Subscription(() => FriendActionResponse, {
    filter: (payload, _, context) => {
      const { userId } = context.req.headers.user;
      const { receiver, sender } = payload.friendAction.friend;
      return userId === receiver.id || userId === sender.id;
    },
  })
  friendAction() {
    return this.pubSub.asyncIterator(PubSubEnum.FRIEND_ACTION);
  }
}
