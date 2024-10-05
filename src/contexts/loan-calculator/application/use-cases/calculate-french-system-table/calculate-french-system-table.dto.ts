import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsInt } from "class-validator";
import { toNumber } from "src/contexts/common/helpers";

export class CalculateFrenchSystemTableDto {
    @ApiProperty({ description: 'Loan debt amount', required: true })
    @IsInt()
    @Transform(({ value }) => toNumber(value))
    loanDebth: number;
    @ApiProperty({ description: 'Yearly interest rate' })
    @IsNumber()
    @Transform(({ value }) => toNumber(value))
    yearlyInterest: number;
    @ApiProperty({ description: 'Total loan duration in years', required: true })
    @IsInt()
    @Transform(({ value }) => toNumber(value))
    totalYears: number;
}
