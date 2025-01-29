import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Temas } from '../../temas/entities/temas.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' }) //CREATE TABLE tb_postagens()
export class Postagem {
  
  @ApiProperty() 
  @PrimaryGeneratedColumn() // INT AUTO_INCREMENT PRIMARY KEY
  id: number;

  @ApiProperty() 
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() //Validção dos dados do obeto
  @Column({ length: 100, nullable: false }) //VARCHAR (100) NOT NULL
  titulo: string;

  @ApiProperty() 
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty() //Validção dos dados do obeto
  @Column({ length: 1000, nullable: false }) //VARCHAR (1000) NOT NULL
  text: string;

  @ApiProperty() 
  @UpdateDateColumn()
  data: Date;

  @ApiProperty() 
  @ManyToOne(() => Temas, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema: Temas;

  @ApiProperty()
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}

