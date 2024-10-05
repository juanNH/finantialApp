import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../domain/repositories/user.repository';
import { TypeOrmUserRepository } from './repositories/typeorm-user.repository';
import { User } from '../domain/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [
    {
        provide: UserRepository,
        useClass: TypeOrmUserRepository,
    },
  ],
  exports: [
    UserRepository
  ],
})
export class UserInfrastructureModule {}
