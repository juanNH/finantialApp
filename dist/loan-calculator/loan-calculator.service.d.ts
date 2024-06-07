import { AmortizationTable } from './interfaces';
import { GetLoanCalculatorTableDto } from './dto';
export declare class LoanCalculatorService {
    loanCalculatorTable(loanCalculatorTableDto: GetLoanCalculatorTableDto): AmortizationTable;
}
