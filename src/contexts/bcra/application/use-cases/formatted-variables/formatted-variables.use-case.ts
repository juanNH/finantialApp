import { Inject, Injectable } from "@nestjs/common";
import { FormattedBcraVariables } from "src/contexts/bcra/domain/classes/formatted-bcra-variables";
import { CacheBcraVariableRepository } from "src/contexts/bcra/domain/repositories/cache-bcra-variable.repository";
import { ExternalBcraVariableRepository } from "src/contexts/bcra/domain/repositories/external-bcra-variable.repository";
import { NotFoundException } from "src/contexts/common/exceptions";
import { parseVariablesToObj } from "./utils/parseVariablesToObj";

@Injectable()
export class FormattedVariablesUseCase {
    constructor(
        @Inject(CacheBcraVariableRepository)
        private readonly cacheBcraVariableRepository: CacheBcraVariableRepository,
        @Inject(ExternalBcraVariableRepository)
        private readonly externalBcraVariableRepository: ExternalBcraVariableRepository,
    ) {
    }
    
    /**
     * This use case get all the principal variables of bcra in a formmated dictionary.
     * @returns {FormattedBcraVariables} List of principal bcra variables.
     */
    async execute(): Promise<FormattedBcraVariables> {
        try {
            let variables = await this.cacheBcraVariableRepository.getVariables();
            if (!variables) {
                variables = await this.externalBcraVariableRepository.fetchListVariables();
                this.cacheBcraVariableRepository.setVariables(variables);
            }
            if (!variables) {
                throw new NotFoundException('BcraVariable with the specified ID not found');
            }
            const variablesFormatted = parseVariablesToObj(variables)
            return variablesFormatted;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}