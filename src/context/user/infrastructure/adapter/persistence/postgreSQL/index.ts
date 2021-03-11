import BasePersistenceAdapter from '../../../../../shared/infrastructure/adapter/persistence';
import UserPersistenceAdapter from '..';
import UserConnector from '../connector';
import User from './entities/User';

export default class UserPostgreSQLAdapter
  extends BasePersistenceAdapter
  implements UserPersistenceAdapter {
  constructor() {
    super(new UserConnector(), User);
  }

  createUser = async (firstName: string, lastName: string) =>
    await this.create(
      new User({
        firstName,
        lastName,
        id: '3c67d7af-5630-4d0f-82b9-a13e89f7171c',
      }),
    );
}
