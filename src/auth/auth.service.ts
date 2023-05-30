import { UserService } from './../user/user.service';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { SignUpInput } from './dto/signup.input';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { SignInInput } from './dto/signin.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  async signup(signUpInput: SignUpInput) {
    const { password, username, email } = signUpInput;

    const isExistingUser = await this.userService.findOneByEmail(email);
    if (isExistingUser) throw new ConflictException('User already exists');

    const hashedPassword = await argon.hash(password);
    const user = await this.userService.create({
      data: { email, hashedPassword, username },
    });

    if (!user) throw new ForbiddenException('User creation failed');

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      email,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async signin(signInInput: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: signInInput.email },
    });
    if (!user) {
      throw new ForbiddenException('User does not exist');
    }

    const isMatchPassword = await argon.verify(
      user.hashedPassword,
      signInInput.password,
    );
    if (!isMatchPassword) {
      throw new ForbiddenException('Access denied');
    }

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: { id: userId, hashedRefreshToken: { not: null } },
      data: { hashedRefreshToken: null },
    });
    return { loggedOut: true };
  }

  async createTokens(userId: number, email: string) {
    const accessToken = await this.jwtService.sign(
      { userId, email },
      {
        expiresIn: '1h',
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      },
    );

    const refreshToken = await this.jwtService.sign(
      {
        userId,
        email,
        accessToken,
      },
      {
        expiresIn: '1d',
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      },
    );

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken },
    });
  }

  async getNewTokens(userId: number, refreshTokenInput: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new ForbiddenException('Access denied');

    const isMatchRefreshToken = await argon.verify(
      user.hashedRefreshToken,
      refreshTokenInput,
    );

    if (!isMatchRefreshToken) throw new ForbiddenException('Access denied');

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }
}
