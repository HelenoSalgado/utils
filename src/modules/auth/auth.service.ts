import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { Request } from 'express';
import { Role } from './role';
import type { SignInDto } from './dto/sign-in-tdo';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  async signIn({ id, firstName = 'username', password, passwordInput, role }: SignInDto, req: Request) {

    const comparePass = compareSync(passwordInput, password);

    if (!comparePass) throw new UnauthorizedException('Email ou senha incorreta');

    const  payload = { id, role } as { id: number, role: Role };

    //req['sub'] = payload
   
    return { 
      user: {
        id, username: firstName.toLowerCase() }, 
        access_token: await this.jwtService.signAsync(payload),
    };
  };

  async signInVerify(token: string) {
    return {
      access_token: await this.jwtService.verify(token),
    };
  }

  async hash({ password }: { password: string }){
    const salt = genSaltSync(12);
    return { password: hashSync(password, salt) };
  }
}