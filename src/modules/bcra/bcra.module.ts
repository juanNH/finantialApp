import { Module } from '@nestjs/common';
import { BcraService } from './bcra.service';
import { BcraResolver } from './bcra.resolver';
import { HttpModule } from '@nestjs/axios';
import { BcraController } from './bcra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcraVariable } from './entities/bcraVariableDB.entity';
import { DataVariable } from './entities/bcraDataVariable.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([BcraVariable, DataVariable])],
  controllers: [BcraController],
  providers: [BcraResolver, BcraService]
})
export class BcraModule {}
