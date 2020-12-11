import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Phone} from './phone.entity';
import {PhoneRepository} from './phone.repository';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({rootPath: join(__dirname,'..','client')}), DatabaseModule,TypeOrmModule.forFeature([Phone,PhoneRepository])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
