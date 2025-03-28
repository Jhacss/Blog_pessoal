import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Postagem } from "../postagem/entities/postagem.entity";
import { Temas } from "../temas/entities/temas.entity";
import { Usuario } from "../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [Postagem, Temas, Usuario],
            synchronize: true,
    };
  }
}