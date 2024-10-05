import { UserRepository } from "src/contexts/user/domain/repositories/user.repository";
import { LoginUserDto } from "./login-user.dto";
import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserSessionDto } from "./user-session.dto";
import { CreateUserUseCase } from "../create-user/create-user-use-case";

@Injectable()
export class LoginUseCase {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
        private readonly createUserUseCase: CreateUserUseCase
    ) { }
    /**
    * Use case to create a user.
    * @param {LoginUserDto} dto Dto.
    * @returns {UserSessionDto} User and token.
    */
    async execute(dto: LoginUserDto): Promise<UserSessionDto> {
        let user = await this.userRepository.getByEmail(dto.email);
        if (!user) {
            user = await this.createUserUseCase.execute(dto)
        }
        const payload = { sub: user.id, username: user.name, email: user.email };
        const access_token = await this.jwtService.signAsync(payload)

        return { user, access_token };
    }
}