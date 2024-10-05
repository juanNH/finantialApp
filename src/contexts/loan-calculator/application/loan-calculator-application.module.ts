import { Module } from '@nestjs/common';
import { CalculateFrenchSystemUseCase } from './use-cases/calculate-french-system-table/calculate-french-system-table-use-case';

@Module({
  imports: [],
  providers: [CalculateFrenchSystemUseCase],
  exports: [CalculateFrenchSystemUseCase],
})
export class LoanCalculatorApplicationModule {}
