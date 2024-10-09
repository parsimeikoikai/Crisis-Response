import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrisisDocument = HydratedDocument<Crisis>;

@Schema()
export class Crisis {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: { type: String, enum: ['Point'], required: true }, coordinates: { type: [Number], required: true } })
  location: {
    type: string;
    coordinates: number[];
  };

  @Prop({ default: Date.now })
  dateReported: Date;

  @Prop({ enum: ['Low', 'Medium', 'High', 'Critical'], required: true })
  severity: string;

  @Prop({ type: String, required: true })
  reportedBy: string; 

  @Prop({ enum: ['Pending', 'Ongoing', 'Resolved'], default: 'Pending' })
  status: string;

  @Prop([String])
  images: string[];

  @Prop({ enum: ['Natural Disaster', 'Health Emergency', 'Conflict', 'Accident', 'Other'], required: true })
  category: string;
}

export const CrisisSchema = SchemaFactory.createForClass(Crisis);