import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ required: true })
  text: string;

  @Prop({ type: String, required: true }) // Reference to the User ID
  user: string;

  @Prop({ type: String, required: true }) // Reference to the Crisis ID
  crisis: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);