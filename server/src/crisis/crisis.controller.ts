import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CrisisService } from './crisis.service';
import { CreateCrisisDto } from './dto/create-crisis.dto';
import { UpdateCrisisDto } from './dto/update-crisis.dto';
import { Crisis } from './entities/crisis.entity';

@Controller('crisis')
export class CrisisController {
  constructor(private readonly crisisService: CrisisService) {}

  @Post()
  async create(@Body() createCrisisDto: CreateCrisisDto): Promise<Crisis> {
    return this.crisisService.create(createCrisisDto);
  }
  @Get()
  async findAll(): Promise<Crisis[]> {
    return this.crisisService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Crisis> {
    return this.crisisService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCrisisDto: UpdateCrisisDto): Promise<Crisis> {
    return this.crisisService.update(id, updateCrisisDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Crisis> {
    return this.crisisService.remove(id);
  }
}
