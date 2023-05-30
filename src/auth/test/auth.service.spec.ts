import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService, ConfigService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('signup', () => {
  //   it('should return { accessToken, refreshToken, user }', async () => {
  //     const input = { password: '', username: '', email: '' };
  //     jest.spyOn(service, 'signup').mockReturnValue({});
  //     expect(await service.signup(input)).to(result);
  //   });
  // });
});
