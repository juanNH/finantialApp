import {
  Controller,
  Get,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { BcraService } from './bcra.service';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { BcraVariable } from './entities/bcraVariable.entity';
import { ErrorDTO } from '../common/dto/error.dto';
import { ApiErrorDecorator } from '../common/decorator/error/error.decotrator';

@Controller('bcra')
@ApiTags('bcra')
export class BcraController {
  constructor(private readonly bcraService: BcraService) { }

  /**
   * Controller to get variable by id
   * @param {GetLoanCalculatorTableDto} bcraVariableDto DTO for loan calculator table. 
   * @returns {BcraVariable} Variable.
   */
  @Get('variable')
  @ApiOperation({ summary: 'Obtains one Bcra variable depends on id is sent' })
  @ApiResponse({
    status: 200,
    description: 'Bcra variable',
    schema: {
      $ref: getSchemaPath(BcraVariable),
    },
    type: BcraVariable
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, 'BcraVariable with the specified ID not found')
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
  loanCalculatorTableFrenchSystem(@Query() bcraVariableDto: GetBcraVariableDto): Promise<BcraVariable> {
    return this.bcraService.findById(bcraVariableDto);
  }
}
