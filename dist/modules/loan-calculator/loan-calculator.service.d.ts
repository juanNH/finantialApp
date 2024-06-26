import { GetLoanCalculatorTableDto } from './dto';
import { AmortizationTable } from './entities/loan-calculator.entity';
export declare class LoanCalculatorService {
    loanCalculatorTableFrenchSystem(loanCalculatorTableDto: GetLoanCalculatorTableDto): AmortizationTable;
}
