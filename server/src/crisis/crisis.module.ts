import { Module } from '@nestjs/common';
import { CrisisService } from './crisis.service';
import { CrisisController } from './crisis.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Crisis, CrisisSchema } from '../Schemas/CrisisSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crisis.name, schema: CrisisSchema }]),
  ],
  controllers: [CrisisController],
  providers: [CrisisService],
})
export class CrisisModule {}
