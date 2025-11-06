import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users.service';
import { HelloController } from './hello.controller';

@Module({
  imports: [AuthModule],
  controllers: [HelloController],
  providers: [UsersService],
})
export class AppModule {}
