import { Injectable } from '@nestjs/common';
import { ExternalBcraVariableRepository } from 'src/contexts/bcra/domain/repositories/external-bcra-variable.repository';
import { HttpService } from '@nestjs/axios';
import * as https from 'https';
import { ExternalBcraVariable } from 'src/contexts/bcra/domain/classes/external-bcra-variable';

@Injectable()
export class HttpBcraVariableRepository implements ExternalBcraVariableRepository {
    constructor(
        private readonly httpService: HttpService,
    ) {
        this.httpService.axiosRef.defaults.httpsAgent = new https.Agent({
            // Todo: try this when host change
            rejectUnauthorized: false,// process.env.ENVIROMENT === 'develop' ? false : true,
        });

    }
    async fetchListVariables(): Promise<ExternalBcraVariable[]> {
        const { data } = await this.httpService.axiosRef.get<{
            results: ExternalBcraVariable[],
            status: number,
            errorMessages: string[],
        }>(process.env.BCRA_API_URL + '/PrincipalesVariables');
        return data.results;
    }

}
