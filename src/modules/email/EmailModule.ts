import { Module } from '@nestjs/common';
import { EmailController } from './EmailController';
import { EmailService } from './EmailService';
import { Subscribe } from './subscribe';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService, Subscribe],
})
export class EmailModule {}
