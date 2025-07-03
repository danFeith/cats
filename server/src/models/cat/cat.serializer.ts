import { CatModel } from './cat.model';

export interface CreateCatDTO {
    firstName: string;
    lastName: string;
    description?: string;
    image?: string;
}

export interface ISerializedCat {
    id: number;
    fullName: string;
    description?: string;
    image?: string;
    mouses?: ISerializedMouse[];
}

interface ISerializedMouse {
    id: number;
    name: string;
}

export const serializeCat = (cat: CatModel): ISerializedCat => ({
    id: cat.id,
    fullName: `${cat.firstName} ${cat.lastName}`,
    description: cat.description,
    image: cat.image,
    mouses: cat.mouses?.map(mouse => ({
        id: mouse.id,
        name: mouse.name,
    })),
});
