import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoanCalculatorModule } from './loan-calculator/loan-calculator.module';

@Module({
  imports: [ConfigModule.forRoot(), LoanCalculatorModule],
})
export class AppModule {}
