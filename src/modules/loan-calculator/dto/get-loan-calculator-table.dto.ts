import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsInt } from "class-validator";
import { toNumber } from "src/modules/common/helpers";

export class GetLoanCalculatorTableDto {
    
    @ApiProperty({ description: 'Loan debt amount', required: true }) // Add Swagger annotation
    @IsInt()
    @Transform(({value}) => toNumber(value))
    loanDebth: number;
    @ApiProperty({ description: 'Yearly interest rate' })
    @IsNumber()
    @Transform(({value}) => toNumber(value))
    yearlyInterest: number;
    @ApiProperty({ description: 'Total loan duration in years', required: true })
    @IsInt()
    @Transform(({value}) => toNumber(value))
    totalYears: number;
}
