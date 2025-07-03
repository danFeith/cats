import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDTO, serializeCat } from 'src/models/cat/cat.serializer';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) { }

  @Get()
  async findAll() {
    return (await this.catService.findAll()).map(serializeCat);
  }

  @Post()
  async create(@Body() dto: CreateCatDTO) {
    return await this.catService.create(dto)
  }
}
