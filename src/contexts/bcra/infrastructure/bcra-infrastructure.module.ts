import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcraDataVariable } from '../domain/entities/bcra-data-variable.entity';
import { BcraVariable } from '../domain/entities/bcra-variable.entity';
import { TypeOrmBcraVariableRepository } from './repositories/db/typeorm-bcra-variable.repository';
import { BcraVariableRepository } from '../domain/repositories/bcra-variable.repository';
import { RedisBcraVariableRepository } from './repositories/cache/redis-bcra-variable.repository';
import { CacheBcraVariableRepository } from '../domain/repositories/cache-bcra-variable.repository';
import { ExternalBcraVariableRepository } from '../domain/repositories/external-bcra-variable.repository';
import { HttpBcraVariableRepository } from './repositories/http/http-bcra-variable.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BcraVariable,BcraDataVariable]),
    HttpModule,
  ],
  providers: [
    {
      provide: BcraVariableRepository,
      useClass: TypeOrmBcraVariableRepository,
    },
    {
      provide: CacheBcraVariableRepository,
      useClass: RedisBcraVariableRepository,
    },
    {
      provide: ExternalBcraVariableRepository,
      useClass: HttpBcraVariableRepository,
    },
  ],
  exports: [
    BcraVariableRepository,
    CacheBcraVariableRepository,
    ExternalBcraVariableRepository,
  ],
})
export class BcraInfrastructureModule {}
