import {
    Controller,
    Get,
    HttpStatus,
    Query,
  } from '@nestjs/common';
  import { ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
  import { ApiErrorDecorator } from 'src/contexts/common/decorator/error/error.decotrator';
import { FindVariableUseCase } from '../application/use-cases/find-variable/find-variable.use-case';
import { ObtainVariableHistoryUseCase } from '../application/use-cases/obtain-variable-history/obtain-variable-history.use-case';
import { FindVariableDto } from '../application/use-cases/find-variable/find-variable.dto';
import { ExternalBcraVariable } from '../domain/classes/external-bcra-variable';
import { HistroyBcraVariableDto } from '../domain/dtos/history-bcra-variable.dto';
import { BcraVariable } from '../domain/entities/bcra-variable.entity';
  
  @Controller('bcra')
  @ApiTags('bcra')
  export class BcraController {
    constructor(
        private readonly findVariableUseCase: FindVariableUseCase,
        private readonly obtainVariableHistoryUseCase: ObtainVariableHistoryUseCase
    ) { }
    /**
     * Controller to get variable by id
     * @param {FindVariableDto} dto DTO for loan calculator table. 
     * @returns {ExternalBcraVariable} Variable.
     */
    @Get('variable')
    @ApiOperation({ summary: 'Obtains one Bcra variable depends on id is sent.' })
    @ApiResponse({
      status: 200,
      description: 'Bcra variable',
      schema: {
        $ref: getSchemaPath(ExternalBcraVariable),
      },
      type: ExternalBcraVariable
    })
    @ApiErrorDecorator(HttpStatus.NOT_FOUND, 'BcraVariable with the specified ID not found')
    @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
    findVariableById(@Query() dto: FindVariableDto): Promise<ExternalBcraVariable> {
      return this.findVariableUseCase.execute(dto);
    }
  
  
  
      /**
     * Controller to get variable history by id
     * @param {GetLoanCalculatorTableDto} bcraVariableDto DTO for loan calculator table. 
     * @returns {BcraVariable} Variable.
     */
      @Get('history')
      @ApiOperation({ summary: 'By an id it get the history.' })
      @ApiResponse({
        status: 200,
        description: 'Bcra variable history',
        schema: {
          $ref: getSchemaPath(HistroyBcraVariableDto),
        },
        type: HistroyBcraVariableDto
      })
      @ApiErrorDecorator(HttpStatus.NOT_FOUND, 'BcraVariable with the specified ID not found')
      @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server')
      historyById(@Query() dto: HistroyBcraVariableDto): Promise<BcraVariable> {
        return this.obtainVariableHistoryUseCase.execute(dto);
      }
  }
  