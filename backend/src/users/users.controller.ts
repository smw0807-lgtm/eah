import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/decorator/current.user';
import { User } from 'generated/prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 내 프로필 조회
  @Get('me')
  @UseGuards(AuthGuard)
  async getMyProfile(@CurrentUser() user: User) {
    return this.usersService.getMyProfile(+user.id);
  }
}
