import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { MouseModule } from './modules/mouse/mouse.module';
import { PostgresProvider } from './providers/database/postgres/postgres.provider';

@Module({
  imports: [CatModule, MouseModule, PostgresProvider],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
