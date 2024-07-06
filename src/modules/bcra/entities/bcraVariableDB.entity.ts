import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DataVariable } from "./bcraDataVariable.entity";


@Entity({name:'variable_principal'})
export class BcraVariable {
    @PrimaryGeneratedColumn({name:'id', type: 'int'})
    id:number;
    @Column({name:"id_variable", unique:true})
    idVariable: number;
    @Column({name:"cd_serie", type:"int"})
    cdSerie: number;
    @Column({name:"descripcion", type:"varchar", length: 500 })
    description: string;

    @OneToMany(() => DataVariable, dataVariable => dataVariable.bcraVariable)
    dataVariable: DataVariable[];
}