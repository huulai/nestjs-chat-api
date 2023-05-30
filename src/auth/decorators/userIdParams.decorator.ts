import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../types';

export const userIdParams = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token) as JwtPayload;

    return decoded.userId;
  },
);
