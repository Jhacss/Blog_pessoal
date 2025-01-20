import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { TemasService } from "../services/temas.service";
import { Temas } from "../entities/temas.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("/temas")
export class TemasController{

    constructor(
        private readonly temasService: TemasService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Temas[]>{
        return this.temasService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findByid(@Param( 'id', ParseIntPipe) id: number): Promise<Temas>{
        return this.temasService.findByid(id);
    }
    
    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao')descricao: string): Promise<Temas[]>{
        return this.temasService.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() temas: Temas): Promise<Temas>{
        return this.temasService.create(temas);


    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() temas: Temas): Promise<Temas>{
        return this.temasService.update(temas);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param( 'id', ParseIntPipe) id: number){
        return this.temasService.delete(id);
    }
}