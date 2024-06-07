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
exports.BcraResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const bcra_service_1 = require("./bcra.service");
const bcraVariable_entity_1 = require("./entities/bcraVariable.entity");
const bcraVariables_entity_1 = require("./entities/bcraVariables.entity");
let BcraResolver = class BcraResolver {
    constructor(bcraService) {
        this.bcraService = bcraService;
    }
    async variablesList() {
        return await this.bcraService.findAll();
    }
    async variables() {
        return await this.bcraService.findAllFormated();
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [bcraVariable_entity_1.BcraVariable]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BcraResolver.prototype, "variablesList", null);
__decorate([
    (0, graphql_1.Query)((returns) => bcraVariables_entity_1.VariablesFormatted),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BcraResolver.prototype, "variables", null);
BcraResolver = __decorate([
    (0, graphql_1.Resolver)('bcra'),
    __metadata("design:paramtypes", [bcra_service_1.BcraService])
], BcraResolver);
exports.BcraResolver = BcraResolver;
//# sourceMappingURL=bcra.resolver.js.map