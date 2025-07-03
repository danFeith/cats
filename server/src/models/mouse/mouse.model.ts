import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { CatModel } from '../cat/cat.model';

@Table({
    tableName: 'mouses',
})
export class MouseModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @ForeignKey(() => CatModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare catId: number;

    @BelongsTo(() => CatModel)
    declare cat: CatModel;
}
