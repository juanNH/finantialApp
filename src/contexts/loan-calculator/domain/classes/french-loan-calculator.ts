import { ApiProperty } from "@nestjs/swagger";
import { IAmortizationEntry, IAmortizationTable } from "../interfaces/french-loan-calculator.interface";

export class AmortizationEntry implements IAmortizationEntry{
  @ApiProperty()
  month: number;
  @ApiProperty()
  payment: number;
  @ApiProperty()
  interestPaid: number;
  @ApiProperty()
  principalPaid: number;
  @ApiProperty()
  remainingBalance: number;

  constructor(data: Partial<AmortizationEntry>) {
    this.month = data.month || 0;
    this.payment = data.payment || 0;
    this.interestPaid = data.interestPaid || 0;
    this.principalPaid = data.principalPaid || 0;
    this.remainingBalance = data.remainingBalance || 0;
  }
}
export class AmortizationTableDto implements IAmortizationTable {
  @ApiProperty()
  monthlyPayment: number;
  @ApiProperty()
  totalToPay: number;
  @ApiProperty({ isArray: true, type: AmortizationEntry })
  amortizationTable: AmortizationEntry[];

  constructor(data: Partial<AmortizationTableDto>) {
    this.monthlyPayment = data.monthlyPayment || 0;
    this.totalToPay = data.totalToPay || 0;
    this.amortizationTable = data.amortizationTable || [];
  }
}

