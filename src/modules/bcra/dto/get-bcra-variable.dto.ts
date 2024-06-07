import { Transform } from "class-transformer";
import {  IsInt } from "class-validator";
import { toNumber } from "src/modules/common/helpers";

export class GetBcraVariableDto {

    @IsInt()
    @Transform(({value}) => toNumber(value))
    idVariable: number;
}
