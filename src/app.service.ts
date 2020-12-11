import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Phone} from './phone.entity';
import {PhoneRepository} from './phone.repository';
import {PhoneDTO} from './PhoneDTO';
@Injectable()
export class AppService {
	constructor( @InjectRepository(PhoneRepository) private readonly phoneRepository: PhoneRepository){}
  
  findAll():Promise<Phone[]>{
  	return this.phoneRepository.find();
  }

  async createPhone(ph: PhoneDTO):Promise<Phone>{
  	return await this.phoneRepository.save(ph);
  }



}
