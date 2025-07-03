import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MouseService } from './mouse.service';
import { serializeMouse } from '../../models/mouse/mouse.serializer';
import { CreateMouseSchema } from './mouse.schema';

@Controller('mouse')
export class MouseController {
  constructor(private readonly mouseService: MouseService) { }

  @Get('/bycat/:id')
  async findByCatId(@Param('id', ParseIntPipe) id: number) {
    return (await this.mouseService.findByCatId(id)).map(serializeMouse)
  }

  @Post()
  async createMouse(@Body() mouseDetails: CreateMouseSchema) {
    return (await this.mouseService.create(mouseDetails))
  }

}
