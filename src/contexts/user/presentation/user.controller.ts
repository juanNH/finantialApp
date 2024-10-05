import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { LoginUseCase } from '../application/use-cases/login/login-user-use-case';
import { LoginUserDto } from '../application/use-cases/login/login-user.dto';
import { UserSessionDto } from '../application/use-cases/login/user-session.dto';
import { ApiErrorDecorator } from 'src/contexts/common/decorator/error/error.decotrator';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  /**
   * Controller login users by any provider
   * @param {LoginUserDto} dto DTO for login a user by provider. 
   * @returns {UserSessionDto} User session DTO.
   */
  @Post('login')
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
  @ApiResponse({
    status: 200,
    description: 'Create user',
    schema: {
      $ref: getSchemaPath(UserSessionDto),
    },
    type: UserSessionDto
  })
  create(@Body() dto: LoginUserDto):Promise<UserSessionDto> {
    return this.loginUseCase.execute(dto);
  }
}
