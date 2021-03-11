import { default as UserEntity } from '../infrastructure/adapter/persistence/entities/User';
import User from '../domain/entities/User';

export default class UserMapper {
  static toUser = (dbEntity: UserEntity) => {
    return new User(dbEntity.firstName, dbEntity.lastName);
  };
}
