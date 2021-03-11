import { Injectable } from '@nestjs/common';
import UserDto from '../../domain/entities/UserDto';
import UserPersistenceAdapter from '../../infrastructure/adapter/persistence';
import UserPostgreSQLAdapter from '../../infrastructure/adapter/persistence/postgreSQL';
import UserMockAdapter from '../../infrastructure/adapter/persistence/mock';

@Injectable()
export default class UserPersistencePort {
  private adapter: UserPersistenceAdapter;
  constructor() {
    this.adapter = this.getAdapter('MOCK');
  }

  private getAdapter = (engine: string): UserPersistenceAdapter => {
    switch (engine) {
      case 'POSTGRES':
        return new UserPostgreSQLAdapter();
      case 'MOCK':
      default:
        return new UserMockAdapter();
    }
  };

  getById = async (id: string) => await this.adapter.getById(id);

  create = async (user: UserDto) =>
    await this.adapter.createUser(user.firstName, user.lastName);
}
