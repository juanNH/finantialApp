import { Transform } from "class-transformer";
import {  IsInt } from "class-validator";
import { toNumber } from "src/contexts/common/helpers";

export class FindVariableDto {
    @IsInt()
    @Transform(({value}) => toNumber(value))
    idVariable: number;
}
