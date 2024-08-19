import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

export class UserSession {
  @ApiProperty({ type: User })
  user: User;
  @ApiProperty()
  access_token: string;
}
