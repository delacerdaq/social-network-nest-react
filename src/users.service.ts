import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'alice',
      password: bcrypt.hashSync('changeme', 10),
    },
  ];

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  sanitize(user: User) {
    const { password, ...rest } = user;
    return rest;
  }
}
