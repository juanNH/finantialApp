import {
  Controller,
  Get,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CalculateFrenchSystemUseCase } from '../application/use-cases/calculate-french-system-table/calculate-french-system-table-use-case';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { AmortizationTableDto } from '../domain/classes/french-loan-calculator';
import { CalculateFrenchSystemTableDto } from '../application/use-cases/calculate-french-system-table/calculate-french-system-table.dto';
import { ApiErrorDecorator } from 'src/contexts/common/decorator/error/error.decotrator';

@Controller('loan-calculator')
@ApiTags('loan-calculator')
export class LoanCalculatorController {
  constructor(private readonly calculateFrenchSystemUseCase: CalculateFrenchSystemUseCase) { }

  /**
   * Controller to get table for loanCalculator table
   * @param {GetLoanCalculatorTableDto} dto DTO for loan calculator table. 
   * @returns {AmortizationTableDto} Returns table data.
   */
  @Get('table-french-system')
  @ApiOperation({ summary: 'Calculates loan amortization table using French System' })
  @ApiResponse({
    status: 200,
    description: 'Loan amortization table for French System',
    schema: {
      $ref: getSchemaPath(AmortizationTableDto),
    },
    type: AmortizationTableDto
  })
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
  loanCalculatorTableFrenchSystem(@Query() dto: CalculateFrenchSystemTableDto
  ): AmortizationTableDto {
    return this.calculateFrenchSystemUseCase.execute(dto);
  }
}
