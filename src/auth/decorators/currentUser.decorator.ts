import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayloadWithRefreshToken } from '../types';

export const currentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (data) return req.user[data];

    return req.user;
  },
);
