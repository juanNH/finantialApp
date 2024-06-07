import {
    Controller,
    Get,
    Query,
  } from '@nestjs/common';
import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { BcraService } from './bcra.service';
  
  @Controller('bcra')
  export class BcraController {
    constructor(private readonly bcraService: BcraService) { }
  
    /**
     * Controller to get variable by id
     * @param {GetLoanCalculatorTableDto} loanCalculatorTableDto DTO for loan calculator table. 
     * @returns {BcraVariable} Variable.
     */
    @Get('variable')
    loanCalculatorTableFrenchSystem(@Query() bcraVariableDto: GetBcraVariableDto) {
      return this.bcraService.findById(bcraVariableDto);
    }
  }
  