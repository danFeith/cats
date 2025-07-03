import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MouseModel } from 'src/models/mouse/mouse.model';
import { CreateMouseDTO } from 'src/models/mouse/mouse.serializer';

@Injectable()
export class MouseService {
    constructor(
        @InjectModel(MouseModel)
        private mouseModel: typeof MouseModel
    ) { }

    async findByCatId(catId: number): Promise<MouseModel[]> {
        return await this.mouseModel.findAll({ where: { catId } })
    }

    async create(dto: CreateMouseDTO) {
        return await this.mouseModel.create<MouseModel>({
            name: dto.name,
            catId: dto.catId
        })
    }
}
