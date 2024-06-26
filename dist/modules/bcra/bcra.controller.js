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
exports.BcraController = void 0;
const common_1 = require("@nestjs/common");
const get_bcra_variable_dto_1 = require("./dto/get-bcra-variable.dto");
const bcra_service_1 = require("./bcra.service");
const swagger_1 = require("@nestjs/swagger");
const bcraVariable_entity_1 = require("./entities/bcraVariable.entity");
const error_decotrator_1 = require("../common/decorator/error/error.decotrator");
let BcraController = class BcraController {
    constructor(bcraService) {
        this.bcraService = bcraService;
    }
    loanCalculatorTableFrenchSystem(bcraVariableDto) {
        return this.bcraService.findById(bcraVariableDto);
    }
};
__decorate([
    (0, common_1.Get)('variable'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtains one Bcra variable depends on id is sent' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Bcra variable',
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(bcraVariable_entity_1.BcraVariable),
        },
        type: bcraVariable_entity_1.BcraVariable
    }),
    (0, error_decotrator_1.ApiErrorDecorator)(common_1.HttpStatus.NOT_FOUND, 'BcraVariable with the specified ID not found'),
    (0, error_decotrator_1.ApiErrorDecorator)(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_bcra_variable_dto_1.GetBcraVariableDto]),
    __metadata("design:returntype", Promise)
], BcraController.prototype, "loanCalculatorTableFrenchSystem", null);
BcraController = __decorate([
    (0, common_1.Controller)('bcra'),
    (0, swagger_1.ApiTags)('bcra'),
    __metadata("design:paramtypes", [bcra_service_1.BcraService])
], BcraController);
exports.BcraController = BcraController;
//# sourceMappingURL=bcra.controller.js.map