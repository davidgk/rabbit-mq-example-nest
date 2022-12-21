import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateCatDto } from '@cat/dto/create-cat.dto';
import { CatService } from '@cat/cat.service';
import { UpdateCatDto } from '@cat/dto/update-cat.dto';

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @MessagePattern('createCat')
  create(@Payload() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @MessagePattern('findAllCat')
  findAll() {
    return this.catService.findAll();
  }

  @MessagePattern('findOneCat')
  findOne(@Payload() id: number) {
    return this.catService.findOne(id);
  }

  @MessagePattern('updateCat')
  update(@Payload() updateCatDto: UpdateCatDto) {
    return this.catService.update(updateCatDto.id, updateCatDto);
  }

  @MessagePattern('removeCat')
  remove(@Payload() id: number) {
    return this.catService.remove(id);
  }
}
