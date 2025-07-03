import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MouseService } from './mouse.service';
import { CreateMouseDTO, serializeMouse } from '../../models/mouse/mouse.serializer';

@Controller('mouse')
export class MouseController {
  constructor(private readonly mouseService: MouseService) { }

  @Get('/bycat/:id')
  async findByCatId(@Param('id', ParseIntPipe) id: number) {
    return (await this.mouseService.findByCatId(id)).map(serializeMouse)
  }

  @Post()
  async createMouse(@Body() dto: CreateMouseDTO) {
    return (await this.mouseService.create(dto))
  }

}
