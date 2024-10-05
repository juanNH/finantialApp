import { UserRepository } from "src/contexts/user/domain/repositories/user.repository";
import { User } from "src/contexts/user/domain/entities/user.entity";
import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user-dto";
import moment from "moment-timezone";

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository,
    ) { }
    /**
    * Use case to create a user.
    * @param {LogInUserDto} dto Dto.
    * @returns {User} User.
    */
    async execute(dto: CreateUserDto): Promise<User> {

        const user = new User({
            email: dto.email,
            name: dto.name,
            provider: dto.provider,
            created_at: moment().tz('America/Argentina/Buenos_Aires').toDate(),
        });
        await this.userRepository.create(user);
        return user;
    }
}