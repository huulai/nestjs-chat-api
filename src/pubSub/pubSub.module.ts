import { Global, Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PubSubResolver } from './pubSub.resolver';

@Global()
@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useFactory: () => {
        return new PubSub();
      },
    },
    PubSubResolver,
  ],
  exports: ['PUB_SUB'],
})
export class PubSubModule {}
