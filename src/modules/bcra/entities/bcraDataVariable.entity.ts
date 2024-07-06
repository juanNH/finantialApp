import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BcraVariable } from "./bcraVariableDB.entity";


@Entity({ name: 'dato_variable' })
export class DataVariable {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;
    @Column({ name: "fecha", type: 'date' })
    date: Date;
    @Column({ name: "valor", type: "int" })
    value: number;
    @Column({ name: "id_variable", type: "int" })
    idVariable: number;
    @ManyToOne(() => BcraVariable, bcraVariable => bcraVariable.dataVariable)
    @JoinColumn({ name: "id_variable" })  // Asegúrate de que el nombre de la columna sea correcto
    bcraVariable: BcraVariable;

}