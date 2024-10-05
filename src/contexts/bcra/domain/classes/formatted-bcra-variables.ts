/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from "@nestjs/graphql"
import { ExternalBcraVariable } from "./external-bcra-variable";

@ObjectType()
export class FormattedBcraVariables {
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    dolarOficial?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    dolarMayorista?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tna?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    badlarBancoPrivNA?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tm20?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaPasesActivos1dia?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaPasesPasivoss1dia?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    baibar?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaDepositos30dias?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaPrestamosAdelanteCtaCte?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaPrestamosPersonales?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    baseMonetaria?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    circulacionMonetaria?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    efectivoPoderPublico?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    efectivoEntidadesFinancieras?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    depositoBancosCtaCtePesos?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable)
    depositoEfectivoEntidadesFinancieras?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    ctaCteNetoFUCO?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    cajaAhorro?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    plazoConInversionNoCEDROS?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    m2Privado30diasVarAnual?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    prestamosEntFinancierasPriv?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    inflacionMensual?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    inflacionInteranual?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    inflacionEsperadaRem12meses?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    cer?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    uva?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    uvi?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tpm?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    badlarBancosPrivEA?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    icl?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    tasaOperacionesPasePasiva1dia?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    pasesPasivosBCRASaldo?: ExternalBcraVariable;
    @Field((_type) => ExternalBcraVariable, { nullable: true })
    reservasInternacionales?: ExternalBcraVariable;
}
