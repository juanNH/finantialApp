interface IAmortizationEntry {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
}
interface IAmortizationTable {
    monthlyPayment: number,
    totalToPay: number,
    amortizationTable: IAmortizationEntry[];
}

export { IAmortizationEntry, IAmortizationTable }