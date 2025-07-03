import { MouseModel } from './mouse.model';

export interface ISerializedMouse {
    id: number;
    name: string;
    catId: number;

}

export const serializeMouse = (mouse: MouseModel): ISerializedMouse => ({
    id: mouse.id,
    name: mouse.name,
    catId: mouse.catId,
});
