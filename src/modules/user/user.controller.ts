import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiErrorDecorator } from '../common/decorator/error/error.decotrator';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UserSession } from './entities/userSession.entity';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Controller to get variable by id
   * @param {GetLoanCalculatorTableDto} bcraVariableDto DTO for loan calculator table. 
   * @returns {BcraVariable} Variable.
   */
  @Post('register')
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
  @ApiResponse({
    status: 200,
    description: 'Create user',
    schema: {
      $ref: getSchemaPath(UserSession),
    },
    type: UserSession
  })
  create(@Body() createUserDto: CreateUserDto):Promise<UserSession> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
