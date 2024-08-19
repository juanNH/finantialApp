import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('usuario')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn({name:'id', type: 'int'})
  id: number;

  @ApiProperty()
  @Column({name:"email", type:"varchar", length: 255, unique: true })
  email: string;

  @ApiProperty()
  @Column({name:"nombre", type:"varchar", length: 255})
  name: string;

  @ApiProperty()
  @Column({name:"provider", type:"varchar", length: 50})
  provider: string;

  @ApiProperty()
  @CreateDateColumn({name:"fecha_creacion", type:"timestamp"})
  created_at: Date;
}
