import { Module } from '@nestjs/common';
import { BcraInfrastructureModule } from '../infrastructure/bcra-infrastructure.module';
import { FindVariableUseCase } from './use-cases/find-variable/find-variable.use-case';
import { FormattedVariablesUseCase } from './use-cases/formatted-variables/formatted-variables.use-case';
import { ListVariablesUseCase } from './use-cases/list-variables/list-variables-use-case';
import { ObtainVariableHistoryUseCase } from './use-cases/obtain-variable-history/obtain-variable-history.use-case';

@Module({
  imports: [BcraInfrastructureModule],
  providers: [FindVariableUseCase, FormattedVariablesUseCase, ListVariablesUseCase, ObtainVariableHistoryUseCase],
  exports: [FindVariableUseCase, FormattedVariablesUseCase, ListVariablesUseCase, ObtainVariableHistoryUseCase],
})
export class BcraApplicationModule {}
