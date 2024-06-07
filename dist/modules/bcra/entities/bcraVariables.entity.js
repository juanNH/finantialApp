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
exports.VariablesFormatted = void 0;
const graphql_1 = require("@nestjs/graphql");
const bcraVariable_entity_1 = require("./bcraVariable.entity");
let VariablesFormatted = class VariablesFormatted {
};
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "dolarOficial", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "dolarMayorista", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tna", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "badlarBancoPrivNA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tm20", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaPasesActivos1dia", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaPasesPasivoss1dia", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "baibar", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaDepositos30dias", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaPrestamosAdelanteCtaCte", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaPrestamosPersonales", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "baseMonetaria", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "circulacionMonetaria", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "efectivoPoderPublico", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "efectivoEntidadesFinancieras", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "depositoBancosCtaCtePesos", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "depositoEfectivoEntidadesFinancieras", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "ctaCteNetoFUCO", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "cajaAhorro", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "plazoConInversionNoCEDROS", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "m2Privado30diasVarAnual", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "prestamosEntFinancierasPriv", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "inflacionMensual", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "inflacionInteranual", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "inflacionEsperadaRem12meses", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "cer", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "uva", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "uvi", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tpm", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "badlarBancosPrivEA", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "icl", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "tasaOperacionesPasePasiva1dia", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "pasesPasivosBCRASaldo", void 0);
__decorate([
    (0, graphql_1.Field)((_type) => bcraVariable_entity_1.BcraVariable, { nullable: true }),
    __metadata("design:type", bcraVariable_entity_1.BcraVariable)
], VariablesFormatted.prototype, "reservasInternacionales", void 0);
VariablesFormatted = __decorate([
    (0, graphql_1.ObjectType)()
], VariablesFormatted);
exports.VariablesFormatted = VariablesFormatted;
//# sourceMappingURL=bcraVariables.entity.js.map