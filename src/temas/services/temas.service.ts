import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Temas } from "../entities/temas.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class TemasService{

    constructor(
        @InjectRepository(Temas)
        private temasRepository: Repository<Temas>
    ){}

    async findAll(): Promise<Temas[]>{
        return this.temasRepository.find({
            relations:{
                postagem: true
            }
        }); //SELECT * FROM TB_postagens;
    }

    async findByid(id: number): Promise<Temas>{

        // SELECT * FROM tb_postagens WHERE id = ?;
        const temas = await this.temasRepository.findOne({
            where: {
                id
            },
            relations:{
                postagem: true
            }
        })

        if(!temas)
            throw new HttpException('Temas não encontrada!', HttpStatus.NOT_FOUND)

        return temas;
    }

    async findByDescricao(descricao: string): Promise<Temas[]>{
        return this.temasRepository.find({

        where:{
            descricao: ILike(`%${descricao}%`)
        },
        relations:{
            postagem: true
        }

        }); 
    
    }

    async create(temas: Temas): Promise<Temas>{
        //INSERT INTO tb_postagens (titulo, texto) VALUES(?, ?)
        return await this.temasRepository.save(temas);
    }

    async update(temas: Temas): Promise<Temas>{

        await this.findByid(temas.id)
        //UPDATE tb_postagens SET titulo = temas.titulo, 
        // texto = temas.texto, data = CURRENT_TINESTAMP()
        //  WHERE id = temas.id
        return await this.temasRepository.save(temas);
    }

    async delete(id: number): Promise<DeleteResult>{

        await this.findByid(id)

        //DELETE tb_postagens WHERE id = ?
        return await this.temasRepository.delete(id)
    }
  

}