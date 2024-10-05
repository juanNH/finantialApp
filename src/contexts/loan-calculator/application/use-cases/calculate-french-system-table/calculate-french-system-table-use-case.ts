import { Injectable } from '@nestjs/common';
import { AmortizationEntry, AmortizationTableDto } from 'src/contexts/loan-calculator/domain/classes/french-loan-calculator';
import { CalculateFrenchSystemTableDto } from './calculate-french-system-table.dto';
import roundToTwoDecimals from 'src/contexts/common/helpers/roundToTwoDecimals.helper';

@Injectable()
export class CalculateFrenchSystemUseCase {
  /**
   * Use case to calculate table for french system.
   * 
   * @param { GetLoanCalculatorTableDto } dto DTO for loan calculator table.
   * @returns {AmortizationTableDto} Returns table data.
   */
  execute(dto: CalculateFrenchSystemTableDto): AmortizationTableDto {
    const anualInterest = dto.yearlyInterest * 0.01;
    const totalMonths = dto.totalYears * 12;
    const monthlyRate = anualInterest / 12;
    const monthlyPayment = roundToTwoDecimals(
      (dto.loanDebth * monthlyRate * (1 + monthlyRate) ** totalMonths) /
      ((1 + monthlyRate) ** totalMonths - 1)
    );
    const amortizationTable: AmortizationEntry[] = [];
    let remainingBalance = dto.loanDebth;

    for (let month = 1; month <= totalMonths; month++) {
      const interestPaid = roundToTwoDecimals(remainingBalance * monthlyRate);
      let principalPaid = roundToTwoDecimals(monthlyPayment - interestPaid);

      if (month === totalMonths) {
        principalPaid = remainingBalance;
      }

      remainingBalance = roundToTwoDecimals(remainingBalance - principalPaid);

      amortizationTable.push(new AmortizationEntry({
        month,
        payment: monthlyPayment,
        interestPaid: Number(interestPaid.toFixed(2)),
        principalPaid: Number(principalPaid.toFixed(2)),
        remainingBalance: Number(remainingBalance.toFixed(2)),
      }));
    }

    return new AmortizationTableDto({
      monthlyPayment: monthlyPayment,
      totalToPay: roundToTwoDecimals(monthlyPayment * totalMonths),
      amortizationTable: amortizationTable,
    });
  }
}
