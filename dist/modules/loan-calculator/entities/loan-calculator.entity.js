"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmortizationTable = exports.AmortizationEntry = exports.LoanCalculator = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoanCalculator {
}
exports.LoanCalculator = LoanCalculator;
class AmortizationEntry {
    constructor(data) {
        this.month = data.month || 0;
        this.payment = data.payment || 0;
        this.interestPaid = data.interestPaid || 0;
        this.principalPaid = data.principalPaid || 0;
        this.remainingBalance = data.remainingBalance || 0;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationEntry.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationEntry.prototype, "payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationEntry.prototype, "interestPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationEntry.prototype, "principalPaid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationEntry.prototype, "remainingBalance", void 0);
exports.AmortizationEntry = AmortizationEntry;
class AmortizationTable {
    constructor(data) {
        this.monthlyPayment = data.monthlyPayment || 0;
        this.totalToPay = data.totalToPay || 0;
        this.amortizationTable = data.amortizationTable || [];
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationTable.prototype, "monthlyPayment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmortizationTable.prototype, "totalToPay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: AmortizationEntry }),
    __metadata("design:type", Array)
], AmortizationTable.prototype, "amortizationTable", void 0);
exports.AmortizationTable = AmortizationTable;
//# sourceMappingURL=loan-calculator.entity.js.map