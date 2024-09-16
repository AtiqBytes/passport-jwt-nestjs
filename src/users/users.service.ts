import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
      
      async findOne(username:string):Promise<User | undefined>
      {
        return this.usersRepository.findOne({where : {username}})
      }

      async create()
}

