import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubscriptionDocument = HydratedDocument<Subscription>;

@Schema()
export class Subscription {
  @Prop({ type: String, required: true }) 
  user: string;

  @Prop({ enum: ['Natural Disaster', 'Health Emergency', 'Conflict', 'Accident', 'Other'], required: true })
  crisisCategory: string;

  @Prop({ default: Date.now })
  subscribedAt: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);