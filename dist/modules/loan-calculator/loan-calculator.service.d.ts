import { AmortizationTable } from './interfaces';
import { GetLoanCalculatorTableDto } from './dto';
export declare class LoanCalculatorService {
    loanCalculatorTableFrenchSystem(loanCalculatorTableDto: GetLoanCalculatorTableDto): AmortizationTable;
}
