import { Injectable } from '@nestjs/common';
import UserPersistencePort from 'src/context/user/application/ports/persistence';
import UserDto from './entities/UserDto';

@Injectable()
export default class UserRepository {
  constructor(private readonly persistencePort: UserPersistencePort) {}

  getById = async (id: string) => await this.persistencePort.getById(id);
  create = async (user: UserDto) => await this.persistencePort.create(user);
}
