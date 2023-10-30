import { Module } from '@nestjs/common';
import { UserController } from './UserController';
import { UserService } from './UserService';
import { Subscribe } from './subscribe';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, Subscribe],
})
export class UserModule {}
