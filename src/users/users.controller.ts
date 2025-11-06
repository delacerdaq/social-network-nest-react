import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from '../users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(
    @Req() req: Request,
  ): Promise<{ id: number; username: string } | { message: string }> {
    const userFromReq = req.user as { userId: number; username: string } | undefined;
    if (!userFromReq) return { message: 'Unauthorized' };

    const user = await this.usersService.findOneByUsername(userFromReq.username);
    if (!user) return { message: 'User not found' };
    return this.usersService.sanitize(user);
  }
}


