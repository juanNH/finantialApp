"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLoanCalculatorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_loan_calculator_dto_1 = require("./create-loan-calculator.dto");
class UpdateLoanCalculatorDto extends (0, mapped_types_1.PartialType)(create_loan_calculator_dto_1.CreateLoanCalculatorDto) {
}
exports.UpdateLoanCalculatorDto = UpdateLoanCalculatorDto;
//# sourceMappingURL=update-loan-calculator.dto.js.map