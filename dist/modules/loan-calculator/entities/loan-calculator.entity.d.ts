import { IAmortizationTable, IAmortizationEntry } from "../interfaces";
export declare class LoanCalculator {
}
export declare class AmortizationEntry implements IAmortizationEntry {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
    constructor(data: Partial<AmortizationEntry>);
}
export declare class AmortizationTable implements IAmortizationTable {
    monthlyPayment: number;
    totalToPay: number;
    amortizationTable: AmortizationEntry[];
    constructor(data: Partial<AmortizationTable>);
}
