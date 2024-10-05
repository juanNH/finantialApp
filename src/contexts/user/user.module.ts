import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { UserController } from './presentation/user.controller';
import { LoginUseCase } from './application/use-cases/login/login-user-use-case';
import { TypeOrmUserRepository } from './infrastructure/repositories/typeorm-user.repository';
import { User } from './domain/entities/user.entity';
import { UserRepository } from './domain/repositories/user.repository';
import { CreateUserUseCase } from './application/use-cases/create-user/create-user-use-case';
dotenv.config();
@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "1d" },
        }),
    ],
    controllers: [UserController],
    providers: [
        {
            provide: UserRepository,
            useClass: TypeOrmUserRepository,
        },
        LoginUseCase,
        CreateUserUseCase,
    ]
})
export class UserModule { }
