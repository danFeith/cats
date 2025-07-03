import { Module } from '@nestjs/common';
import { MouseService } from './mouse.service';
import { MouseController } from './mouse.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatModel } from 'src/models/cat/cat.model';
import { MouseModel } from 'src/models/mouse/mouse.model';

@Module({
  imports: [SequelizeModule.forFeature([CatModel, MouseModel])],
  controllers: [MouseController],
  providers: [MouseService],
})
export class MouseModule { }
