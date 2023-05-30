import { User } from '../../../@generated/index';

export const userStub = (): User => {
  return {
    id: 1,
    email: 'test@example.com',
    username: 'test123',
    hashedPassword: '123',
    hashedRefreshToken: '123',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
