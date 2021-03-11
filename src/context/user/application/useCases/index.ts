import { Injectable } from '@nestjs/common';
import User from '../../domain/entities/User';
import UserDto from '../../domain/entities/UserDto';
import GetInfoUseCase from './getInfo';
import CreateUseCase from './create';

@Injectable()
export default class UserUseCases {
  constructor(
    private readonly getInfoUseCase: GetInfoUseCase,
    private readonly createUseCase: CreateUseCase,
  ) {}

  getInfo = async (id: string): Promise<string> =>
    await this.getInfoUseCase.execute(id);

  create = async (user: UserDto): Promise<User> =>
    await this.createUseCase.execute(user);
}
