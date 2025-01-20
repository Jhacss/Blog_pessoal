import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemasController } from "./controllers/temas.controller";
import { TemasService } from "./services/temas.service";
import { Temas } from "./entities/temas.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Temas])],
    controllers: [TemasController],
    providers: [TemasService],
    exports: [TypeOrmModule],
})
export class TemasModule {}