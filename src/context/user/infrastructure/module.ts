import { Module } from '@nestjs/common';
import UserController from './interfaces/controller';
import UserUseCases from '../application/useCases';
import GetInfoUseCase from '../application/useCases/getInfo';
import CreateUseCase from '../application/useCases/create';
import UserRepository from '../domain/repository';
import UserPersistencePort from '../application/ports/persistence';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserUseCases,
    GetInfoUseCase,
    CreateUseCase,
    UserRepository,
    UserPersistencePort,
  ],
})
export default class AppModule {}
