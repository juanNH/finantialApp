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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCalculatorController = void 0;
const common_1 = require("@nestjs/common");
const loan_calculator_service_1 = require("./loan-calculator.service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const loan_calculator_entity_1 = require("./entities/loan-calculator.entity");
const error_decotrator_1 = require("../common/decorator/error/error.decotrator");
let LoanCalculatorController = class LoanCalculatorController {
    constructor(loanCalculatorService) {
        this.loanCalculatorService = loanCalculatorService;
    }
    loanCalculatorTableFrenchSystem(loanCalculatorTableDto) {
        return this.loanCalculatorService.loanCalculatorTableFrenchSystem(loanCalculatorTableDto);
    }
};
__decorate([
    (0, common_1.Get)('table-french-system'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculates loan amortization table using French System' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Loan amortization table for French System',
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(loan_calculator_entity_1.AmortizationTable),
        },
        type: loan_calculator_entity_1.AmortizationTable
    }),
    (0, error_decotrator_1.ApiErrorDecorator)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetLoanCalculatorTableDto]),
    __metadata("design:returntype", loan_calculator_entity_1.AmortizationTable)
], LoanCalculatorController.prototype, "loanCalculatorTableFrenchSystem", null);
LoanCalculatorController = __decorate([
    (0, common_1.Controller)('loan-calculator'),
    (0, swagger_1.ApiTags)('loan-calculator'),
    __metadata("design:paramtypes", [loan_calculator_service_1.LoanCalculatorService])
], LoanCalculatorController);
exports.LoanCalculatorController = LoanCalculatorController;
//# sourceMappingURL=loan-calculator.controller.js.map