import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatModel } from './../../models/cat/cat.model';
import { MouseModel } from './../../models/mouse/mouse.model';

@Module({
  imports: [SequelizeModule.forFeature([CatModel, MouseModel])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule { }
