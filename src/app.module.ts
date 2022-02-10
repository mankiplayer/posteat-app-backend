import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoDBModule } from './dynamodb/dynamodb.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CommentsModule } from './comments/comments.module';
import { User } from './users/user.entity';
import { Restaurant } from './restaurants/restaurant.entity';
import { Comment } from './comments/comment.entity';

@Module({
  imports: [
    DynamoDBModule.forRoot([User, Restaurant, Comment]),
    EventEmitterModule.forRoot(),
    UsersModule,
    RestaurantsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
