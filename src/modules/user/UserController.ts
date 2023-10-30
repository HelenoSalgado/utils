import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './UserService';
import { SendEmail } from './tdo/SendEmail-tdo';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('email')
  async sendEmail(@Body() contact: SendEmail){
    return await this.service.sendEmail(contact);
  }
}
