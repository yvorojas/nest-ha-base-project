import UserPersistenceAdapter from '..';
import MockEntity from './entities/MockEntity';

export default class UserPostgreSQLAdapter implements UserPersistenceAdapter {
  getById = async (id: string): Promise<MockEntity> =>
    new MockEntity('1', 'Martin', 'Antunez');

  createUser = async (firstName: string, lastName: string) =>
    new MockEntity('1', firstName, lastName);
}
