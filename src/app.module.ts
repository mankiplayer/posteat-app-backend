import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DynamoDBModule } from './dynamodb/dynamodb.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { CommentsModule } from './comments/comments.module';
import { User } from './users/user.entity';
import { Restaurant } from './restaurants/restaurant.entity';
import { Comment } from './comments/comment.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DynamoDBModule.forRoot([User, Restaurant, Comment]),
    EventEmitterModule.forRoot(),
    UsersModule,
    RestaurantsModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
