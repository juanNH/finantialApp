import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User email', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User name', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Provider of session', required: true })
  @IsString()
  @IsNotEmpty()
  provider: string;
}