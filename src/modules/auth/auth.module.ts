import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { auth } from 'src/config';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: auth.secret,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  providers: [
    AuthService, {
       provide: APP_GUARD,
       useClass: AuthGuard,
    },
],
  controllers: [AuthController],
  exports: [
    AuthService,
  ],
})
export class AuthModule {}