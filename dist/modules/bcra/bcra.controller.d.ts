import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { BcraService } from './bcra.service';
import { BcraVariable } from './entities/bcraVariable.entity';
export declare class BcraController {
    private readonly bcraService;
    constructor(bcraService: BcraService);
    loanCalculatorTableFrenchSystem(bcraVariableDto: GetBcraVariableDto): Promise<BcraVariable>;
}
