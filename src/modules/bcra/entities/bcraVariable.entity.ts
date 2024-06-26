/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from "@nestjs/graphql"
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()

export class BcraVariable {
    @ApiProperty()
    @Field((type) => Int)
    idVariable: number;
    @ApiProperty()
    @Field((type) => Int)
    cdSerie: number;
    @ApiProperty()
    @Field()
    descripcion: string;
    @ApiProperty()
    @Field()
    fecha: string;
    @ApiProperty()
    @Field()
    valor: string;
}