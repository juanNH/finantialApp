import { Inject, Injectable } from "@nestjs/common";
import { ExternalBcraVariable } from "src/contexts/bcra/domain/classes/external-bcra-variable";
import { NotFoundException } from "src/contexts/common/exceptions";
import { FindVariableDto } from "./find-variable.dto";
import { CacheBcraVariableRepository } from "src/contexts/bcra/domain/repositories/cache-bcra-variable.repository";
import { ExternalBcraVariableRepository } from "src/contexts/bcra/domain/repositories/external-bcra-variable.repository";

@Injectable()
export class FindVariableUseCase {
    constructor(
        @Inject(CacheBcraVariableRepository)
        private readonly cacheBcraVariableRepository: CacheBcraVariableRepository,
        @Inject(ExternalBcraVariableRepository)
        private readonly externalBcraVariableRepository: ExternalBcraVariableRepository,
    ) {
    }

    /**
     * This use case a variable of bcra.
     * @returns {ExternalBcraVariable} List of principal bcra variables.
     */
    async execute(dto: FindVariableDto): Promise<ExternalBcraVariable> {
        try {
            let variables = await this.cacheBcraVariableRepository.getVariables();
            if (!variables) {
                variables = await this.externalBcraVariableRepository.fetchListVariables();
                this.cacheBcraVariableRepository.setVariables(variables);
            }
            const variable = variables.filter(item => item.idVariable === dto.idVariable)[0] || null
            if (!variable) {
                throw new NotFoundException('BcraVariable with the specified ID not found');
            }
            return variable;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}