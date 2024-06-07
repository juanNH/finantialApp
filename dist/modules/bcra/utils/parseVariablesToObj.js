"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVariablesToObj = void 0;
const parseVariablesToObj = (data) => {
    const variables = {};
    for (const element of data) {
        orderData(element, variables);
    }
    return variables;
};
exports.parseVariablesToObj = parseVariablesToObj;
const orderData = (variable, variables) => {
    switch (variable.idVariable) {
        case 1:
            variables.reservasInternacionales = Object.assign({}, variable);
            break;
        case 4:
            variables.dolarOficial = Object.assign({}, variable);
            break;
        case 5:
            variables.dolarMayorista = Object.assign({}, variable);
            break;
        case 6:
            variables.tna = Object.assign({}, variable);
            break;
        case 7:
            variables.badlarBancoPrivNA = Object.assign({}, variable);
            break;
        case 8:
            variables.tm20 = Object.assign({}, variable);
            break;
        case 9:
            variables.tasaPasesActivos1dia = Object.assign({}, variable);
            break;
        case 10:
            variables.tasaPasesPasivoss1dia = Object.assign({}, variable);
            break;
        case 11:
            variables.baibar = Object.assign({}, variable);
            break;
        case 12:
            variables.tasaDepositos30dias = Object.assign({}, variable);
            break;
        case 13:
            variables.tasaPrestamosAdelanteCtaCte = Object.assign({}, variable);
            break;
        case 14:
            variables.tasaPrestamosPersonales = Object.assign({}, variable);
            break;
        case 15:
            variables.baseMonetaria = Object.assign({}, variable);
            break;
        case 16:
            variables.circulacionMonetaria = Object.assign({}, variable);
            break;
        case 17:
            variables.efectivoPoderPublico = Object.assign({}, variable);
            break;
        case 18:
            variables.efectivoEntidadesFinancieras = Object.assign({}, variable);
            break;
        case 19:
            variables.depositoBancosCtaCtePesos = Object.assign({}, variable);
            break;
        case 21:
            variables.depositoEfectivoEntidadesFinancieras = Object.assign({}, variable);
            break;
        case 22:
            variables.ctaCteNetoFUCO = Object.assign({}, variable);
            break;
        case 23:
            variables.cajaAhorro = Object.assign({}, variable);
            break;
        case 24:
            variables.plazoConInversionNoCEDROS = Object.assign({}, variable);
            break;
        case 25:
            variables.m2Privado30diasVarAnual = Object.assign({}, variable);
            break;
        case 26:
            variables.prestamosEntFinancierasPriv = Object.assign({}, variable);
            break;
        case 27:
            variables.inflacionMensual = Object.assign({}, variable);
            break;
        case 28:
            variables.inflacionInteranual = Object.assign({}, variable);
            break;
        case 29:
            variables.inflacionEsperadaRem12meses = Object.assign({}, variable);
            break;
        case 30:
            variables.cer = Object.assign({}, variable);
            break;
        case 31:
            variables.uva = Object.assign({}, variable);
            break;
        case 32:
            variables.uvi = Object.assign({}, variable);
            break;
        case 34:
            variables.tpm = Object.assign({}, variable);
            break;
        case 35:
            variables.badlarBancosPrivEA = Object.assign({}, variable);
            break;
        case 40:
            variables.icl = Object.assign({}, variable);
            break;
        case 41:
            variables.tasaOperacionesPasePasiva1dia = Object.assign({}, variable);
            break;
        case 42:
            variables.pasesPasivosBCRASaldo = Object.assign({}, variable);
            break;
        default:
            break;
    }
};
//# sourceMappingURL=parseVariablesToObj.js.map