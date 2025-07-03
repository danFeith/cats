import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MouseModel } from 'src/models/mouse/mouse.model';
import { CreateMouseSchema } from './mouse.schema';

@Injectable()
export class MouseService {
    constructor(
        @InjectModel(MouseModel)
        private mouseModel: typeof MouseModel
    ) { }

    async findByCatId(catId: number): Promise<MouseModel[]> {
        return await this.mouseModel.findAll({ where: { catId } })
    }

    async create(mouseDetails: CreateMouseSchema) {
        return await this.mouseModel.create<MouseModel>({
            name: mouseDetails.name,
            catId: mouseDetails.catId
        })
    }
}
