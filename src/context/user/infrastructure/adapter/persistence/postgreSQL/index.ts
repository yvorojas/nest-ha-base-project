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

  createUser = async (firstName: string, lastName: string) => {
    console.log(firstName, lastName);
    return await this.create(
      new User({
        firstName,
        lastName,
      }),
    );
  };
}
