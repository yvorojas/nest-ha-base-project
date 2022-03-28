import { Injectable } from '@nestjs/common';
import User from '../../domain/entities/User';
import UserRepository from '../../domain/repository';
import UserMapper from '../mapper';

@Injectable()
export default class GetInfoUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute = async (id: string): Promise<string> => {
    console.log(id);
    const dbEntity = await this.userRepository.getById(id);
    const user: User = UserMapper.toUser(dbEntity);
    return user.getFullName();
  };
}
