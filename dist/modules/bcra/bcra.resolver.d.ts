import { BcraService } from './bcra.service';
import { BcraVariable } from './entities/bcraVariable.entity';
import { VariablesFormatted } from './entities/bcraVariables.entity';
export declare class BcraResolver {
    private readonly bcraService;
    constructor(bcraService: BcraService);
    variablesList(): Promise<BcraVariable[]>;
    variables(): Promise<VariablesFormatted>;
}
