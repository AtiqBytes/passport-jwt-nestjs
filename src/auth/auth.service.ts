import { UsersService } from './../users/users.service';
import bcrypt from "bcrypt";
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

constructor(private userService:UsersService){}

async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}
