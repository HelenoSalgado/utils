import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './EmailController';
import { UserService } from './EmailService';

describe('AppController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.sendEmail({
        name: "leno",
        email: "leno@gmail.com",
        text: "Test"
      })).toBe('');
    });
  });
});
