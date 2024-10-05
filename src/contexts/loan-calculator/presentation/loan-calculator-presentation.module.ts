import { Module } from '@nestjs/common';
import { LoanCalculatorController } from './loan-calculator.controller';
import { LoanCalculatorApplicationModule } from '../application/loan-calculator-application.module';

@Module({
  imports: [LoanCalculatorApplicationModule],
  controllers: [LoanCalculatorController],
})
export class LoanCalculatorPresentationModule {}
