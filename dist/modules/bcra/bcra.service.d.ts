import { BcraVariable } from './entities/bcraVariable.entity';
import { HttpService } from '@nestjs/axios';
import { Cache } from 'cache-manager';
import { VariablesFormatted } from './entities/bcraVariables.entity';
import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
export declare class BcraService {
    private readonly httpService;
    private cacheManager;
    constructor(httpService: HttpService, cacheManager: Cache);
    findAll(): Promise<BcraVariable[]>;
    findAllFormated(): Promise<VariablesFormatted>;
    findById(bcraVariableDto: GetBcraVariableDto): Promise<BcraVariable>;
}
