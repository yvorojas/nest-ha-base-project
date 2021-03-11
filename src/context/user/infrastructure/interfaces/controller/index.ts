import { Controller, Get, HttpCode, Post, Param, Body } from '@nestjs/common';
import User from 'src/context/user/domain/entities/User';
import UserDto from 'src/context/user/domain/entities/UserDto';
import UserUseCases from '../../../application/useCases';
@Controller()
export default class UserController {
  constructor(private readonly userUseCases: UserUseCases) {}

  @Get(':id')
  async getUserInfo(@Param() params): Promise<string> {
    return await this.userUseCases.getInfo(params.id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() user: UserDto): Promise<User> {
    return await this.userUseCases.create(user);
  }
}
