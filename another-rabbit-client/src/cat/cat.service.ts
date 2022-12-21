import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_MQ_SERVICE') private readonly rmqClient: ClientRMQ,
  ) {}

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat: ' + createCatDto.message;
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
