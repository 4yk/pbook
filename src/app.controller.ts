import { Controller, Get , Post,Body, Options} from '@nestjs/common';
import { AppService } from './app.service';
import {Phone} from './phone.entity';
import {PhoneDTO} from './PhoneDTO';
import {PhoneRepository} from './phone.repository';

@Controller('phones')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Promise<Phone[]>{
  	
    return this.appService.findAll();
  }

@Options()
getOptions():string{
	return "OK";
}
  @Post()
  async create(@Body() phoneDTO: PhoneDTO) {
  	this.appService.createPhone(phoneDTO);
  	return 200;
}
}
