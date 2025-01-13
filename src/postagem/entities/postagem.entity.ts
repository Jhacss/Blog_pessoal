import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) //CREATE TABLE tb_postagens()
export class Postagem{

@PrimaryGeneratedColumn()// INT AUTO_INCREMENT PRIMARY KEY
id: number;

@IsNotEmpty() //Validção dos dados do obeto
@Column({length: 100, nullable: false}) //VARCHAR (100) NOT NULL
titulo: string;

@IsNotEmpty() //Validção dos dados do obeto
@Column({length: 1000, nullable: false}) //VARCHAR (1000) NOT NULL
text: string;

@UpdateDateColumn()
data: Date;

}