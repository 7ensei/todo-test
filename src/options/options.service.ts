import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OptionsService {
    constructor(
        @InjectRepository(Option)
        private readonly optionRepository: Repository<Option>) {
    }

    create(createOptionDto) {
        const option = this.optionRepository.create({ ...createOptionDto });
        return this.optionRepository.save(option);
    }

    findByName(name: string) {
        return this.optionRepository.findOneBy({ name: name });
    }

    update(name: string, updateOptionDto) {
        return this.optionRepository.update({ name: name }, { ...updateOptionDto });
    }

    remove(name: string) {
        return this.optionRepository.delete({ name: name });
    }
}
