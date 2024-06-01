interface AmortizationEntry {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
}
interface AmortizationTable {
    monthlyPayment: number,
    totalToPay: number,
    amortizationTable: AmortizationEntry[];
}

export { AmortizationEntry, AmortizationTable }