import { BcraVariable } from "../entities/bcraVariable.entity";
import { VariablesFormatted } from "../entities/bcraVariables.entity";

/**
 * 
 * @param {BcraVariable} data Array to parse into a object for graphql. 
 * @returns {VariablesFormatted} Data formatted to use value => key.
 */

export const parseVariablesToObj = (data: BcraVariable[]) => {
    const variables: VariablesFormatted = {
    }
    for (const element of data) {
        orderData(element, variables)
    }
    return variables;
}

/**
 * order the data to get the correct format for graphql
 * @param {BcraVariable} variable variable to analizy
 * @param {} variables variable to complete with format
 */
const orderData = (variable: BcraVariable, variables: VariablesFormatted) => {
    switch (variable.idVariable) {
        case 1:
            variables.reservasInternacionales = {
                ...variable,
            }
            break;
        case 4:
            variables.dolarOficial = {
                ...variable,
            }
            break;
        case 5:
            variables.dolarMayorista = {
                ...variable,
            }
            break;
        case 6:
            variables.tna = {
                ...variable,
            }
            break;
        case 7:
            variables.badlarBancoPrivNA = {
                ...variable,
            }
            break;
        case 8:
            variables.tm20 = {
                ...variable,
            }
            break;
        case 9:
            variables.tasaPasesActivos1dia = {
                ...variable,
            }
            break;
        case 10:
            variables.tasaPasesPasivoss1dia = {
                ...variable,
            }
            break;
        case 11:
            variables.baibar = {
                ...variable,
            }
            break;
        case 12:
            variables.tasaDepositos30dias = {
                ...variable,
            }
            break;
        case 13:
            variables.tasaPrestamosAdelanteCtaCte = {
                ...variable,
            }
            break;
        case 14:
            variables.tasaPrestamosPersonales = {
                ...variable,
            }
            break;
        case 15:
            variables.baseMonetaria = {
                ...variable,
            }
            break;
        case 16:
            variables.circulacionMonetaria = {
                ...variable,
            }
            break;
        case 17:
            variables.efectivoPoderPublico = {
                ...variable,
            }
            break;
        case 18:
            variables.efectivoEntidadesFinancieras = {
                ...variable,
            }
            break;
        case 19:
            variables.depositoBancosCtaCtePesos = {
                ...variable,
            }
            break;
        case 21:
            variables.depositoEfectivoEntidadesFinancieras = {
                ...variable,
            }
            break;
        case 22:
            variables.ctaCteNetoFUCO = {
                ...variable,
            }
            break;
        case 23:
            variables.cajaAhorro = {
                ...variable,
            }
            break;
        case 24:
            variables.plazoConInversionNoCEDROS = {
                ...variable,
            }
            break;
        case 25:
            variables.m2Privado30diasVarAnual = {
                ...variable,
            }
            break;
        case 26:
            variables.prestamosEntFinancierasPriv = {
                ...variable,
            }
            break;
        case 27:
            variables.inflacionMensual = {
                ...variable,
            }
            break;
        case 28:
            variables.inflacionInteranual = {
                ...variable,
            }
            break;
        case 29:
            variables.inflacionEsperadaRem12meses = {
                ...variable,
            }
            break;
        case 30:
            variables.cer = {
                ...variable,
            }
            break;
        case 31:
            variables.uva = {
                ...variable,
            }
            break;
        case 32:
            variables.uvi = {
                ...variable,
            }
            break;
        case 34:
            variables.tpm = {
                ...variable,
            }
            break;
        case 35:
            variables.badlarBancosPrivEA = {
                ...variable,
            }
            break;
        case 40:
            variables.icl = {
                ...variable,
            }
            break;
        case 41:
            variables.tasaOperacionesPasePasiva1dia = {
                ...variable,
            }
            break;
        case 42:
            variables.pasesPasivosBCRASaldo = {
                ...variable,
            }
            break;
        default:
            break;
    }
}