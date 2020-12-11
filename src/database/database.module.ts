import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from '../phone.entity';

@Module({
	imports:[TypeOrmModule.forRoot({
		type:'postgres',
		host:'localhost',
		port:5432,
		username:'sgmk',
		password: 'sgmk',
		database:'sgmkdb',
		entities:[Phone],
		synchronize: true,
	})]
})
export class DatabaseModule {}
