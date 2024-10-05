import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/contexts/user/domain/entities/user.entity';

export class UserSessionDto {
  @ApiProperty({ type: User })
  user: User;
  @ApiProperty()
  access_token: string;
}