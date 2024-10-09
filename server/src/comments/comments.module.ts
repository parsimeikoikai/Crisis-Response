import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '../Schemas/Comment';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentsService],
})
export class CommentsModule {}
