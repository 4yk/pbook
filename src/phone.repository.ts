import { Phone } from './phone.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PhoneDTO } from './PhoneDTO';

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {
  createPhone = async (phoneDTO: PhoneDTO) => {
    return await this.save(phoneDTO);
  };
}