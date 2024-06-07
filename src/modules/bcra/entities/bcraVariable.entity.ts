/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()

export class BcraVariable {
    @Field((type) => Int)
    idVariable: number;
    @Field((type) => Int)
    cdSerie: number;
    @Field()
    descripcion: string;
    @Field()
    fecha: string;
    @Field()
    valor: string;
}