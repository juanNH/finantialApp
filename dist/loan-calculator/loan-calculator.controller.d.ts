import { LoanCalculatorService } from './loan-calculator.service';
import { GetLoanCalculatorTableDto } from './dto';
export declare class LoanCalculatorController {
    private readonly loanCalculatorService;
    constructor(loanCalculatorService: LoanCalculatorService);
    loanCalculatorTable(loanCalculatorTableDto: GetLoanCalculatorTableDto): import("./interfaces/amortizationTable.interface").AmortizationTable;
}
