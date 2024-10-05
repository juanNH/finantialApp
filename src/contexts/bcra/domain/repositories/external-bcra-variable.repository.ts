import { ExternalBcraVariable } from "../classes/external-bcra-variable";

export abstract class ExternalBcraVariableRepository {
    abstract fetchListVariables(): Promise<ExternalBcraVariable[]>;
}