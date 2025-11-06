import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Request } from 'express';

@Controller()
export class HelloController {
  @UseGuards(JwtAuthGuard)
  @Get('hello')
  getHello(@Req() req: Request) {
    const user = req.user || { username: 'anonymous' };
    return { message: `Hello ${(user as { username: string }).username}!` };
  }
}
