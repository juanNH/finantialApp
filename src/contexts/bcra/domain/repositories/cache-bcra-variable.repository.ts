import { ExternalBcraVariable } from "../classes/external-bcra-variable";

export abstract class CacheBcraVariableRepository {
    abstract bcraVariablesKey: string;
    abstract getVariables(): Promise<ExternalBcraVariable[] | null>;
    abstract setVariables(variables: ExternalBcraVariable[]): Promise<void>;
}