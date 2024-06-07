import { Module } from '@nestjs/common';
import { BcraService } from './bcra.service';
import { BcraResolver } from './bcra.resolver';
import { HttpModule } from '@nestjs/axios';
import { BcraController } from './bcra.controller';

@Module({
  controllers: [BcraController],
  imports: [HttpModule],
  providers: [BcraResolver, BcraService]
})
export class BcraModule {}
