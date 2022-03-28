import BaseConnector from 'src/context/shared/infrastructure/adapter/persistence/connector';
import User from './postgreSQL/entities/User';

export default class UserConnector extends BaseConnector {
  constructor() {
    console.log(process.env.DB_HOST);
    super({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [User],
    });
  }
}
