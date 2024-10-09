import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrisisLogDocument = HydratedDocument<CrisisLog>;

@Schema()
export class CrisisLog {
  @Prop({ type: String, required: true }) // Reference to the Crisis ID
  crisis: string;

  @Prop({ enum: ['Status Change', 'Severity Change', 'Other'], required: true })
  action: string;

  @Prop()
  oldValue: string;

  @Prop()
  newValue: string;

  @Prop({ type: String, required: true }) // Reference to the User ID
  changedBy: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const CrisisLogSchema = SchemaFactory.createForClass(CrisisLog);