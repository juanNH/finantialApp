import { LoanCalculatorService } from './loan-calculator.service';
import { GetLoanCalculatorTableDto } from './dto';
import { AmortizationTable } from './entities/loan-calculator.entity';
export declare class LoanCalculatorController {
    private readonly loanCalculatorService;
    constructor(loanCalculatorService: LoanCalculatorService);
    loanCalculatorTableFrenchSystem(loanCalculatorTableDto: GetLoanCalculatorTableDto): AmortizationTable;
}
