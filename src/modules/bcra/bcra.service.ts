import { Inject, Injectable } from '@nestjs/common';
import { BcraVariable } from './entities/bcraVariable.entity';
import { HttpService } from '@nestjs/axios';
import * as https from 'https';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { parseVariablesToObj } from './utils/parseVariablesToObj';
import { VariablesFormatted } from './entities/bcraVariables.entity';
import { GetBcraVariableDto } from './dto/get-bcra-variable.dto';
import { NotFoundException } from '../common/exceptions';

@Injectable()
export class BcraService {
    constructor(
        private readonly httpService: HttpService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        this.httpService.axiosRef.defaults.httpsAgent = new https.Agent({
            // Todo: try this when host change
            rejectUnauthorized: false,// process.env.ENVIROMENT === 'develop' ? false : true,
        });
    }
    /**
     * This method get all the principal variables of bcra.
     * @returns {BcraVariable} List of principal bcra variables.
     */
    async findAll(): Promise<BcraVariable[]> {
        try {
            const key = 'bcraVariables';
            const variablesCached = await this.cacheManager.get(key);
            if (variablesCached) {
                return JSON.parse(variablesCached as string)
            }
            const { data } = await this.httpService.axiosRef.get<{
                results: BcraVariable[],
                status: number,
                errorMessages: string[],
            }>(process.env.BCRA_API_URL + '/PrincipalesVariables');
            const ttl = 1000 * 60
            const jsonArrayString = JSON.stringify(data.results);
            await this.cacheManager.set(key, jsonArrayString, ttl);
            return data.results
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    /**
     * this method format the array of principal variable into key=>value object.
     * @returns {VariablesFormatted} Object formatted to use key=>value.
     */
    async findAllFormated(): Promise<VariablesFormatted> {
        const data = await this.findAll();
        const variablesFormatted = parseVariablesToObj(data)
        return variablesFormatted;
    }

    /**
     * this method format the array of principal variable into key=>value object.
     * @returns {VariablesFormatted} Object formatted to use key=>value.
     */
    async findById(bcraVariableDto: GetBcraVariableDto): Promise<BcraVariable> {
        try {
            const data = await this.findAll();
            const variable = data.filter(item => item.idVariable === bcraVariableDto.idVariable)[0] || null
            if (!variable) {
                throw new NotFoundException('BcraVariable with the specified ID not found');
            }
            return variable;
        } catch (err) {
            console.error(err)
            throw err;
        }
    }
}
