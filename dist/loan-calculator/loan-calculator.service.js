"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCalculatorService = void 0;
const common_1 = require("@nestjs/common");
const roundToTwoDecimals_helper_1 = __importDefault(require("../common/helpers/roundToTwoDecimals.helper"));
let LoanCalculatorService = class LoanCalculatorService {
    loanCalculatorTable(loanCalculatorTableDto) {
        const { yearlyInterest, totalYears, loanDebth } = loanCalculatorTableDto;
        const anualInterest = yearlyInterest * 0.01;
        const totalMonths = totalYears * 12;
        const monthlyRate = anualInterest / 12;
        const monthlyPayment = (0, roundToTwoDecimals_helper_1.default)((loanDebth * monthlyRate * (1 + monthlyRate) ** totalMonths) /
            ((1 + monthlyRate) ** totalMonths - 1));
        const amortizationTable = [];
        let remainingBalance = loanDebth;
        for (let month = 1; month <= totalMonths; month++) {
            const interestPaid = (0, roundToTwoDecimals_helper_1.default)(remainingBalance * monthlyRate);
            let principalPaid = (0, roundToTwoDecimals_helper_1.default)(monthlyPayment - interestPaid);
            if (month === totalMonths) {
                principalPaid = remainingBalance;
            }
            remainingBalance = (0, roundToTwoDecimals_helper_1.default)(remainingBalance - principalPaid);
            amortizationTable.push({
                month,
                payment: monthlyPayment,
                interestPaid: Number(interestPaid.toFixed(2)),
                principalPaid: Number(principalPaid.toFixed(2)),
                remainingBalance: Number(remainingBalance.toFixed(2)),
            });
        }
        return {
            monthlyPayment: monthlyPayment,
            amortizationTable,
        };
    }
};
LoanCalculatorService = __decorate([
    (0, common_1.Injectable)()
], LoanCalculatorService);
exports.LoanCalculatorService = LoanCalculatorService;
//# sourceMappingURL=loan-calculator.service.js.map