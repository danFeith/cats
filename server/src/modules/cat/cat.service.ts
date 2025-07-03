import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CatModel } from '../../models/cat/cat.model';
import { CreateCatDTO } from '../../models/cat/cat.serializer';
import { MouseModel } from 'src/models/mouse/mouse.model';

@Injectable()
export class CatService {
    constructor(
        @InjectModel(CatModel)
        private catModel: typeof CatModel,
    ) { }

    async findAll(): Promise<CatModel[]> {
        return (await this.catModel.findAll({ include: [MouseModel], order: [['id', 'ASC']] }))
    }

    async create(dto: CreateCatDTO): Promise<CatModel> {
        return await this.catModel.create<CatModel>({
            firstName: dto.firstName,
            lastName: dto.lastName,
            description: dto.description,
            image: dto.image
        })
    }
}
