import {
    Body,
    Controller, 
    Get,
    Post,
    Req
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HashDto, SignInDto } from './dto/sign-in-tdo';
import { Public } from './decorators/public.decorator'; 
import { Request } from 'express';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Get('/verify')
  async signInVerify(@Req() req: Request) {
    return await this.authService.signInVerify(req.headers.authorization);
  }

  @Public()
  @Post()
  async signIn(@Req() req: Request, @Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto, req);
  }
  
  @Public()
  @Post('/hash')
  async hash(@Body() hashDto: HashDto) {
    console.log(hashDto)
    return await this.authService.hash(hashDto);
  }

}