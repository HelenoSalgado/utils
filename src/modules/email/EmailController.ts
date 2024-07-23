import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './EmailService';
import { SendEmail } from './tdo/SendEmail-tdo';
import { Public } from '../auth/decorators/public.decorator';

@Controller('email')
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @Public()
  @Post()
  async sendEmail(@Body() contact: SendEmail){
    return await this.service.sendEmail(contact);
  }
}
