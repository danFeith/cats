import { CatModel } from './cat.model';

export interface ISerializedCat {
    id: number;
    firstName: string;
    lastName: string;
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
    firstName: cat.firstName,
    lastName: cat.lastName,
    description: cat.description,
    image: cat.image,
    mouses: cat.mouses?.map(mouse => ({
        id: mouse.id,
        name: mouse.name,
    })),
});
