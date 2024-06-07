import { LoanCalculatorService } from './loan-calculator.service';
import { GetLoanCalculatorTableDto } from './dto';
export declare class LoanCalculatorController {
    private readonly loanCalculatorService;
    constructor(loanCalculatorService: LoanCalculatorService);
    loanCalculatorTableFrenchSystem(loanCalculatorTableDto: GetLoanCalculatorTableDto): import("./interfaces/amortizationTable.interface").AmortizationTable;
}
