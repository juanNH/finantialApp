import { Resolver, Query } from '@nestjs/graphql';
import { FormattedBcraVariables } from '../domain/classes/formatted-bcra-variables';
import { FormattedVariablesUseCase } from '../application/use-cases/formatted-variables/formatted-variables.use-case';
import { ListVariablesUseCase } from '../application/use-cases/list-variables/list-variables-use-case';
import { ExternalBcraVariable } from '../domain/classes/external-bcra-variable';

@Resolver('bcra')
export class BcraResolver {
    constructor(
        private readonly formattedVariablesUseCase: FormattedVariablesUseCase,
        private readonly listVariablesUseCase: ListVariablesUseCase
    ) { }

    /**
     * Graphql resolver for BcraVariable.
     * @returns {ExternalBcraVariable} Array of data.
     */
    @Query(() => [ExternalBcraVariable])
    async variablesList(): Promise<ExternalBcraVariable[]> {
        return await this.listVariablesUseCase.execute()
    }
    /**
     * Graphql resolver for VariablesFormatted.
     * @returns {FormattedBcraVariables} Data. 
     */
    @Query(() => FormattedBcraVariables)
    async variables(): Promise<FormattedBcraVariables> {
        return await this.formattedVariablesUseCase.execute();
    }
}
