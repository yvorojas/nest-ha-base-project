import { Injectable } from '@nestjs/common';
import User from '../../domain/entities/User';
import UserDto from '../../domain/entities/UserDto';
import UserRepository from '../../domain/repository';
import UserMapper from '../mapper';

@Injectable()
export default class CreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute = async (user: UserDto): Promise<User> => {
    const dbEntity = await this.userRepository.create(user);
    const createdUser: User = UserMapper.toUser(dbEntity);
    return createdUser;
  };
}
