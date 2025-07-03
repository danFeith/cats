import {
    AutoIncrement,
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { MouseModel } from '../mouse/mouse.model';

@Table({
    tableName: 'cats',
})
export class CatModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    declare id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    declare firstName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    declare lastName: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    declare description?: string;

    @Column({ type: DataType.STRING, allowNull: true })
    declare image?: string;

    @HasMany(() => MouseModel)
    declare mouses?: MouseModel[];
}
