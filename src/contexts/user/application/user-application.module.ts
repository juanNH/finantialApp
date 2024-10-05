import { Module } from '@nestjs/common';
import { LoginUseCase } from './use-cases/login/login-user-use-case';
import { CreateUserUseCase } from './use-cases/create-user/create-user-use-case';
import { UserInfrastructureModule } from '../infrastructure/user-infrastructure.module';

@Module({
    imports: [UserInfrastructureModule],
    providers: [
        LoginUseCase,
        CreateUserUseCase,
    ],
    exports: [
        LoginUseCase,
        CreateUserUseCase
    ],
})
export class UserApplicationModule { }
