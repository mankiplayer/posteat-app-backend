import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoDBModule } from './dynamodb/dynamodb.module';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CommentsModule } from './comments/comments.module';
import { UserEvent, User } from './users/entities';
import { RestaurantEvent, Restaurant } from './restaurants/entities';
import { CommentEvent, Comment } from './comments/entities';

@Module({
  imports: [
    DynamoDBModule.forRoot({
      events: [UserEvent, RestaurantEvent, CommentEvent],
      views: [User, Restaurant, Comment],
    }),
    UsersModule,
    RestaurantsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
