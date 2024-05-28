interface AmortizationEntry {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
}
interface AmortizationTable {
    monthlyPayment: number,
    amortizationTable: AmortizationEntry[];
}

export { AmortizationEntry, AmortizationTable }