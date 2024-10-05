import { Module } from '@nestjs/common';
import { BcraResolver } from './bcra.resolver';
import { BcraController } from './bcra.controller';
import { BcraApplicationModule } from '../application/bcra-application.module';

@Module({
  imports: [BcraApplicationModule],
  controllers: [BcraController],
  providers: [BcraResolver]
})
export class BcraPresentationModule {}
