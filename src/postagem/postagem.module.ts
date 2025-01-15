import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";
import { TemasModule } from "../temas/temas.module";
import { TemasService } from "../temas/services/temas.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemasModule],
    controllers: [PostagemController],
    providers: [PostagemService, TemasService],
    exports: [TypeOrmModule],
})
export class PostagemModule {}