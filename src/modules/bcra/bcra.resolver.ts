import { Resolver, Query } from '@nestjs/graphql';
import { BcraService } from './bcra.service';
import { BcraVariable } from './entities/bcraVariable.entity';
import { VariablesFormatted } from './entities/bcraVariables.entity';

@Resolver('bcra')
export class BcraResolver {
  constructor(private readonly bcraService: BcraService) { }

  /**
   * Graphql resolver for BcraVariable.
   * @returns {BcraVariable} Array of data.
   */
  @Query((returns) => [BcraVariable])
  async variablesList(): Promise<BcraVariable[]> {
    return await this.bcraService.findAll()
  }
  /**
   * Graphql resolver for VariablesFormatted.
   * @returns {VariablesFormatted} Data. 
   */
  @Query((returns) => VariablesFormatted)
  async variables(): Promise<VariablesFormatted>{
    return await this.bcraService.findAllFormated();
  }
}
