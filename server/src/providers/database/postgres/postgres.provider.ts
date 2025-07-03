import { SequelizeModule } from '@nestjs/sequelize';
import { CatModel } from '../../../models/cat/cat.model';
import { MouseModel } from '../../../models/mouse/mouse.model';

console.log("process.env.POSTGRES_PASSWORD", process.env.POSTGRES_PASSWORD)

export const PostgresProvider = SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [CatModel, MouseModel],
    autoLoadModels: true,
    synchronize: true, // safe for dev only!
    logging: false,
});
