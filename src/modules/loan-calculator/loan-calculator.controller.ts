import {
  Controller,
  Get,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { LoanCalculatorService } from './loan-calculator.service';
import { GetLoanCalculatorTableDto } from './dto';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { AmortizationTable } from './entities/loan-calculator.entity';
import { ApiErrorDecorator } from '../common/decorator/error/error.decotrator';

@Controller('loan-calculator')
@ApiTags('loan-calculator')
export class LoanCalculatorController {
  constructor(private readonly loanCalculatorService: LoanCalculatorService) { }

  /**
   * Controller to get table for loanCalculator table
   * @param {GetLoanCalculatorTableDto} loanCalculatorTableDto DTO for loan calculator table. 
   * @returns {AmortizationTable} Returns table data.
   */
  @Get('table-french-system')
  @ApiOperation({ summary: 'Calculates loan amortization table using French System' })
  @ApiResponse({
    status: 200,
    description: 'Loan amortization table for French System',
    schema: {
      $ref: getSchemaPath(AmortizationTable),
    },
    type: AmortizationTable
  })
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
  loanCalculatorTableFrenchSystem(@Query() loanCalculatorTableDto: GetLoanCalculatorTableDto
  ): AmortizationTable {
    return this.loanCalculatorService.loanCalculatorTableFrenchSystem(loanCalculatorTableDto);
  }
}
