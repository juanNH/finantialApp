import { Injectable } from '@nestjs/common';
import { AmortizationEntry, AmortizationTable } from './interfaces';
import roundToTwoDecimals from 'src/modules/common/helpers/roundToTwoDecimals.helper';
import { GetLoanCalculatorTableDto } from './dto';

@Injectable()
export class LoanCalculatorService {
  /**
   * Service to get a table from the loan calculator.
   * 
   * @param { GetLoanCalculatorTableDto } loanCalculatorTableDto DTO for loan calculator table.
   * @returns {AmortizationTable} Returns table data.
   */
  loanCalculatorTableFrenchSystem(loanCalculatorTableDto: GetLoanCalculatorTableDto): AmortizationTable {
    const { yearlyInterest, totalYears, loanDebth } = loanCalculatorTableDto;
    const anualInterest = yearlyInterest * 0.01;
    const totalMonths = totalYears * 12;
    const monthlyRate = anualInterest / 12;
    const monthlyPayment = roundToTwoDecimals(
      (loanDebth * monthlyRate * (1 + monthlyRate) ** totalMonths) /
      ((1 + monthlyRate) ** totalMonths - 1)
    );
    const amortizationTable: AmortizationEntry[] = [];
    let remainingBalance = loanDebth;

    for (let month = 1; month <= totalMonths; month++) {
      const interestPaid = roundToTwoDecimals(remainingBalance * monthlyRate);
      let principalPaid = roundToTwoDecimals(monthlyPayment - interestPaid);

      // Ajustar el último pago para asegurar que el saldo restante sea 0
      if (month === totalMonths) {
        principalPaid = remainingBalance;
      }

      remainingBalance = roundToTwoDecimals(remainingBalance - principalPaid);

      amortizationTable.push({
        month,
        payment: monthlyPayment,
        interestPaid: Number(interestPaid.toFixed(2)),
        principalPaid: Number(principalPaid.toFixed(2)),
        remainingBalance: Number(remainingBalance.toFixed(2)),
      });
    }

    return {
      totalToPay: roundToTwoDecimals(monthlyPayment*totalMonths),
      monthlyPayment: monthlyPayment,
      amortizationTable,
    };
  }
}
