import { Inject, Injectable } from "@nestjs/common";
import { ExternalBcraVariable } from "src/contexts/bcra/domain/classes/external-bcra-variable";
import { CacheBcraVariableRepository } from "src/contexts/bcra/domain/repositories/cache-bcra-variable.repository";
import { ExternalBcraVariableRepository } from "src/contexts/bcra/domain/repositories/external-bcra-variable.repository";

@Injectable()
export class ListVariablesUseCase {
    constructor(
        @Inject(CacheBcraVariableRepository)
        private readonly cacheBcraVariableRepository: CacheBcraVariableRepository,
        @Inject(ExternalBcraVariableRepository)
        private readonly externalBcraVariableRepository: ExternalBcraVariableRepository,
    ) {
    }
    
    /**
     * This use case get all the principal variables of bcra.
     * @returns {BcraVariable} List of principal bcra variables.
     */
        async execute(): Promise<ExternalBcraVariable[]> {
            try {
                const variablesCached = await this.cacheBcraVariableRepository.getVariables();
                if(variablesCached){
                    return variablesCached
                }
                const variablesFromBcraService = await this.externalBcraVariableRepository.fetchListVariables();
                this.cacheBcraVariableRepository.setVariables(variablesFromBcraService);
                return variablesFromBcraService;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
}