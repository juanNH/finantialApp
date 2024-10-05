import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserApplicationModule } from '../application/user-application.module';

@Module({
  imports: [UserApplicationModule],
  controllers: [UserController],
  providers: []
})
export class UserPresentationModule {}
