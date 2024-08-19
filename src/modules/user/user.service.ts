import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import  moment from 'moment-timezone';
import { JwtService } from '@nestjs/jwt';
import { UserSession } from './entities/userSession.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

      /**
     * Service to create a user.
     * @param {CreateUserDto} dto Dto.
     * @returns {User} User.
    */
  async create(createUserDto: CreateUserDto): Promise<UserSession> {
    const { email, name, provider } = createUserDto;
    let user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      user = new User();
      user.email = email;
      user.name = name;
      user.provider = provider;
      user.created_at = moment().tz('America/Argentina/Buenos_Aires').toDate();
      await this.userRepository.save(user);
    }
    const payload = { sub: user.id, username: user.name, email:user.email };
    const access_token = await this.jwtService.signAsync(payload)

    return {user, access_token};
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
