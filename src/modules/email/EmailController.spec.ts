import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './EmailController';
import { EmailService } from './EmailService';

describe('AppController', () => {
  let userController: EmailController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [EmailService],
    }).compile();

    userController = app.get<EmailController>(EmailController);
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
