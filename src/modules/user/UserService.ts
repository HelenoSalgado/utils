import { Injectable } from '@nestjs/common';
import { SendEmail } from './tdo/SendEmail-tdo';
import { Subscribe } from './subscribe';

@Injectable()
export class UserService {
  
  constructor(private readonly subscribe: Subscribe){}

  async sendEmail(contact: SendEmail){
    return await this.subscribe.sendEmail(contact);
  }
}
