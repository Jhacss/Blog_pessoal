import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";



@Entity({name: "tb_temas"}) //CREATE TABLE tb_postagens()
export class Temas{

    @PrimaryGeneratedColumn()// INT AUTO_INCREMENT PRIMARY KEY
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() //Validção dos dados do obeto
    @Column({length: 1000, nullable: false}) //VARCHAR (100) NOT NULL
    descricao: string;
    
    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[];
    
}