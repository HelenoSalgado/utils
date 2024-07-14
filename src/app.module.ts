import { Module } from '@nestjs/common';
import { EmailController } from './modules/email/EmailController';
import { EmailService } from './modules/email/EmailService';
import { Subscribe } from './modules/email/subscribe';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { EmailModule } from './modules/email/EmailModule';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [AuthModule, EmailModule],
    controllers: [EmailController, AuthController],
    providers: [EmailService, Subscribe, AuthService],
})
export class AppModule {}