import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CatService } from './cat.service';
import { serializeCat } from 'src/models/cat/cat.serializer';
import { CreateCatSchema } from './cat.schema';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Get('/search')
  async search(@Query('query') query: string) {
    return (await this.catService.searchByName(query)).map(serializeCat);
  }

  @Get()
  async findAll() {
    return (await this.catService.findAll()).map(serializeCat);
  }

  @Post()
  async create(@Body() dto: CreateCatSchema) {
    return await this.catService.create(dto)
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.catService.delete(id)
  }
}
