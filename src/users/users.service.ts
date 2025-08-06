import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async createUser(email: string, name: string, passwordHash: string): Promise<User> {
    const user = this.usersRepository.create({ email, name });
    // You can add passwordHash to the entity if you add a password field
    return this.usersRepository.save(user);
  }
}
