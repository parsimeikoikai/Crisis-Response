import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CrisisModule } from './crisis/crisis.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UsersModule, CrisisModule,
   CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


