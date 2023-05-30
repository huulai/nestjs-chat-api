import { UserCreateInput } from './../../@generated/index';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('create()', () => {
  //   // change email to test
  //   const data: UserCreateInput = {
  //     email: 'test1@example.com',
  //     username: 'test',
  //     hashedPassword: '123',
  //   };
  //   it('should create user', async () => {
  //     const user = await service.create({ data });
  //     if (!user) return;
  //     expect(user.email).toBe(data.email);
  //   });

  //   it('should throw on duplicate email', async () => {
  //     try {
  //       await service.create({ data });
  //     } catch (error) {
  //       expect(error.status).toBe(403);
  //     }
  //   });
  // });
});
