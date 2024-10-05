import { Inject, Injectable } from "@nestjs/common";
import { HistroyBcraVariableDto } from "src/contexts/bcra/domain/dtos/history-bcra-variable.dto";
import { BcraVariable } from "src/contexts/bcra/domain/entities/bcra-variable.entity";
import { BcraVariableRepository } from "src/contexts/bcra/domain/repositories/bcra-variable.repository";

@Injectable()
export class ObtainVariableHistoryUseCase {
    constructor(
        @Inject(BcraVariableRepository)
        private readonly bcraVariableRepository: BcraVariableRepository,
    ) {
    }
    
    /**
     * This use case gets history of a variable of bcra.
     * @returns {BcraVariable} List of principal bcra variables.
     */
        async execute(dto:HistroyBcraVariableDto): Promise<BcraVariable> {
            try {
                const variableHistory = await this.bcraVariableRepository.getHistory(dto);
                return variableHistory;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
}