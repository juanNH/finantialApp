/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from "@nestjs/graphql"
import { BcraVariable } from "./bcraVariable.entity";

@ObjectType()
export class VariablesFormatted {
    @Field((_type) => BcraVariable, { nullable: true })
    dolarOficial?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    dolarMayorista?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tna?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    badlarBancoPrivNA?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tm20?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaPasesActivos1dia?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaPasesPasivoss1dia?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    baibar?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaDepositos30dias?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaPrestamosAdelanteCtaCte?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaPrestamosPersonales?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    baseMonetaria?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    circulacionMonetaria?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    efectivoPoderPublico?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    efectivoEntidadesFinancieras?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    depositoBancosCtaCtePesos?: BcraVariable;
    @Field((_type) => BcraVariable)
    depositoEfectivoEntidadesFinancieras?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    ctaCteNetoFUCO?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    cajaAhorro?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    plazoConInversionNoCEDROS?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    m2Privado30diasVarAnual?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    prestamosEntFinancierasPriv?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    inflacionMensual?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    inflacionInteranual?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    inflacionEsperadaRem12meses?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    cer?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    uva?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    uvi?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tpm?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    badlarBancosPrivEA?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    icl?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    tasaOperacionesPasePasiva1dia?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    pasesPasivosBCRASaldo?: BcraVariable;
    @Field((_type) => BcraVariable, { nullable: true })
    reservasInternacionales?: BcraVariable;
}
