import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const currentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    return req.user.userId;
  },
);
