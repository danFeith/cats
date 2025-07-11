import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CatModel } from '../../models/cat/cat.model';
import { MouseModel } from 'src/models/mouse/mouse.model';
import { CreateCatSchema } from './cat.schema';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class CatService {
    constructor(
        @InjectModel(CatModel)
        private catModel: typeof CatModel,
    ) { }

    async findAll(): Promise<CatModel[]> {
        return await this.catModel.findAll()
    }

    async create(cat: CreateCatSchema): Promise<CatModel> {
        return await this.catModel.create<CatModel>({
            firstName: cat.firstName,
            lastName: cat.lastName,
            description: cat.description,
            image: cat.image
        })
    }

    async delete(catId: number) {
        const catToDelete = await this.catModel.findOne({ where: { id: catId } })
        if (!catToDelete) throw new NotFoundException('Cat not found');
        await catToDelete.destroy()
    }


    async searchByName(query: string): Promise<CatModel[]> {
        return await this.catModel.findAll({
            include: [
                {
                    model: MouseModel,
                },
            ],
            where: {
                [Op.or]: [
                    { firstName: { [Op.iLike]: `%${query}%` } },
                    { lastName: { [Op.iLike]: `%${query}%` } },
                    Sequelize.where(
                        Sequelize.col('mouses.name'),
                        { [Op.iLike]: `%${query}%` }
                    ),
                ],
            },
        });
    }
}