import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { BcraService } from './bcra.service';
export declare class BcraController {
    private readonly bcraService;
    constructor(bcraService: BcraService);
    loanCalculatorTableFrenchSystem(bcraVariableDto: GetBcraVariableDto): Promise<import("./entities/bcraVariable.entity").BcraVariable>;
}
