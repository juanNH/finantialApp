import { Transform } from "class-transformer";
import { IsNumber, IsInt } from "class-validator";
import { toNumber } from "src/common/helpers";

export class GetLoanCalculatorTableDto {

    @IsInt()
    @Transform(({value}) => toNumber(value))
    loanDebth: number;
    @IsNumber()
    @Transform(({value}) => toNumber(value))
    yearlyInterest: number;
    @IsInt()
    @Transform(({value}) => toNumber(value))
    totalYears: number;
}
