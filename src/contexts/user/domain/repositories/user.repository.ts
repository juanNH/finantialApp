import { User } from "../entities/user.entity";


export abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract getByEmail(email: string): Promise<User | null>;
}