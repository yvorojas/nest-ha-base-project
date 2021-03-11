import { Test, TestingModule } from '@nestjs/testing';
import UserController from '../../../../../../src/context/user/infrastructure/interfaces/controller';
import UserUseCases from '../../../../../../src/context/user/application/useCases';
import GetInfoUseCase from '../../../../../../src/context/user/application/useCases/getInfo'

describe('user controller test', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserUseCases, GetInfoUseCase],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.getUserInfo()).toBe('Hello!!');
    });
  });
});
