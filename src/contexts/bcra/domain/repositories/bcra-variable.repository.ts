import { HistroyBcraVariableDto } from "../dtos/history-bcra-variable.dto";
import { BcraVariable } from "../entities/bcra-variable.entity";

export abstract class BcraVariableRepository {
    abstract getHistory(dto: HistroyBcraVariableDto): Promise<BcraVariable>;
}