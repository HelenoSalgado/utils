import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './EmailService';
import { SendEmail } from './tdo/SendEmail-tdo';

@Controller('email')
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @Post()
  async sendEmail(@Body() contact: SendEmail){
    return await this.service.sendEmail(contact);
  }
}
