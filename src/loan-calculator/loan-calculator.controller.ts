import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { LoanCalculatorService } from './loan-calculator.service';
import { GetLoanCalculatorTableDto } from './dto';

@Controller('loan-calculator')
export class LoanCalculatorController {
  constructor(private readonly loanCalculatorService: LoanCalculatorService) { }

  /**
   * Controller to get table for loanCalculator table
   * @param {GetLoanCalculatorTableDto} loanCalculatorTableDto DTO for loan calculator table. 
   * @returns {AmortizationTable} Returns table data.
   */
  @Get('table')
  loanCalculatorTable(@Query() loanCalculatorTableDto: GetLoanCalculatorTableDto) {
    return this.loanCalculatorService.loanCalculatorTable(loanCalculatorTableDto);
  }
}
