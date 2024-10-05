import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BcraVariableRepository } from '../../../domain/repositories/bcra-variable.repository';
import { BcraVariable } from '../../../domain/entities/bcra-variable.entity';
import { HistroyBcraVariableDto } from '../../../domain/dtos/history-bcra-variable.dto';

@Injectable()
export class TypeOrmBcraVariableRepository implements BcraVariableRepository {
    constructor(
        @InjectRepository(BcraVariable)
        private readonly bcraVariableRepository: Repository<BcraVariable>,
    ) { }
    async getHistory(dto: HistroyBcraVariableDto): Promise<BcraVariable> {
        const query = this.bcraVariableRepository
        .createQueryBuilder('variable')
        .leftJoinAndSelect('variable.dataVariable', 'dataVariable')
        .where('variable.idVariable = :idVariable', { idVariable: dto.idVariable })
        .andWhere('dataVariable.fecha BETWEEN :dateStart AND :endDate', { dateStart: dto.dateStart, endDate: dto.endDate });
        const data = await query.getOne();
        return data;
    }

}
