import { Inject, Injectable } from '@nestjs/common';
import { CacheBcraVariableRepository } from 'src/contexts/bcra/domain/repositories/cache-bcra-variable.repository';
import { ExternalBcraVariable } from 'src/contexts/bcra/domain/classes/external-bcra-variable';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisBcraVariableRepository implements CacheBcraVariableRepository {
    bcraVariablesKey: string;
    constructor(
        @Inject(CACHE_MANAGER) 
        private readonly  cacheManager: Cache,
    ) { 
    this.bcraVariablesKey = 'bcraVariables'
    }
    async getVariables(): Promise<ExternalBcraVariable[] | null> {
        const variablesCached = await this.cacheManager.get(this.bcraVariablesKey);
        if (variablesCached) {
            return JSON.parse(variablesCached as string)
        } else {
            return null;
        }
    }
    async setVariables(variables: ExternalBcraVariable[]): Promise<void> {
        const ttl = 1000 * 60;
        const jsonArrayString = JSON.stringify(variables);
        await this.cacheManager.set(this.bcraVariablesKey, jsonArrayString, ttl);
    }
}
