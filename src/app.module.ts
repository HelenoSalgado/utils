import { Module } from '@nestjs/common';
import { UserController } from './modules/user/UserController';
import { UserService } from './modules/user/UserService';
import { Subscribe } from './modules/user/subscribe';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, Subscribe],
})
export class AppModule {}