import BaseConnector from 'src/context/shared/infrastructure/adapter/persistence/connector';
import User from './postgreSQL/entities/User';

export default class UserConnector extends BaseConnector {
  constructor() {
    super({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'users',
      entities: [User],
    });
  }
}
