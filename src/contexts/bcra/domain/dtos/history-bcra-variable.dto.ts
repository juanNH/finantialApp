import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {  IsDate, IsInt } from "class-validator";
import { toDate, toNumber } from "src/contexts/common/helpers";

export class HistroyBcraVariableDto {
    @ApiProperty({ description: 'Id to get history', required: true })
    @IsInt()
    @Transform(({value}) => toNumber(value))
    idVariable: number;
    @ApiProperty({ description: 'Date start', required: true })
    @IsDate({ message: 'endDate must be a valid date Ex: format 2000-01-01' })
    @Transform(({ value })=>toDate(value), { toClassOnly: true })
    dateStart: Date;
    @ApiProperty({ description: 'Date end', required: true })
    @IsDate({ message: 'endDate must be a valid date Ex: format 2000-12-31' })
    @Transform(({ value })=>toDate(value), { toClassOnly: true })
    endDate: Date;

}
