import {
  Controller,
  Get,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { BcraService } from './bcra.service';
import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { BcraVariable as BcraVariableDB } from './entities/bcraVariableDB.entity';
import { ErrorDTO } from '../common/dto/error.dto';
import { ApiErrorDecorator } from '../common/decorator/error/error.decotrator';
import { GetBcraVariableHistoryDto } from './dto/get-bcra-variable-history.dto';
import { BcraVariable } from './entities/bcraVariable.entity';

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
  @ApiOperation({ summary: 'Obtains one Bcra variable depends on id is sent.' })
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
  findVariableById(@Query() bcraVariableDto: GetBcraVariableDto): Promise<BcraVariable> {
    return this.bcraService.findById(bcraVariableDto);
  }



    /**
   * Controller to get variable history by id
   * @param {GetLoanCalculatorTableDto} bcraVariableDto DTO for loan calculator table. 
   * @returns {BcraVariable} Variable.
   */
    @Get('historyById')
    @ApiOperation({ summary: 'By an id it get the history.' })
    @ApiResponse({
      status: 200,
      description: 'Bcra variable history',
      schema: {
        $ref: getSchemaPath(BcraVariable),
      },
      type: BcraVariable
    })
    @ApiErrorDecorator(HttpStatus.NOT_FOUND, 'BcraVariable with the specified ID not found')
    @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
    historyById(@Query() bcraVariableHistoryDto: GetBcraVariableHistoryDto): Promise<BcraVariableDB> {
      return this.bcraService.variableHistoryById(bcraVariableHistoryDto);
    }
}
