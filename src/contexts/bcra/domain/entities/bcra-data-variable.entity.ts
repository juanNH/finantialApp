import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BcraVariable } from "./bcra-variable.entity";


@Entity({ name: 'dato_variable' })
export class BcraDataVariable {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;
    @Column({ name: "fecha", type: 'date' })
    date: Date;
    @Column({ name: "valor", type: "int" })
    value: number;
    @Column({ name: "id_variable", type: "int" })
    idVariable: number;
    @ManyToOne(() => BcraVariable, bcraVariable => bcraVariable.dataVariable)
    @JoinColumn({ name: "id_variable" })
    bcraVariable: BcraVariable;
}