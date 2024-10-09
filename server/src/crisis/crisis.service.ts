import { Injectable } from '@nestjs/common';
import { CreateCrisisDto } from './dto/create-crisis.dto';
import { UpdateCrisisDto } from './dto/update-crisis.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrisisDocument } from 'src/Schemas/CrisisSchema';
import { Crisis } from './entities/crisis.entity';

@Injectable()
export class CrisisService {
  constructor(
    @InjectModel(Crisis.name) private crisisModel: Model<CrisisDocument>,
  ) {}
  async create(createCrisisDto: CreateCrisisDto): Promise<Crisis> {
    const newCrisis = new this.crisisModel(createCrisisDto);
    return newCrisis.save();
  }

  async findAll(): Promise<Crisis[]> {
    return this.crisisModel.find().exec();
  }

  async findOne(id: string): Promise<Crisis> {
    return this.crisisModel.findById(id).exec();
  }

  async update(id: string, updateCrisisDto: UpdateCrisisDto): Promise<Crisis> {
    return this.crisisModel
      .findByIdAndUpdate(id, updateCrisisDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Crisis> {
    return this.crisisModel.findByIdAndDelete(id).exec();
  }
}
