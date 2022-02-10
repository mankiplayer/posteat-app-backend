import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsEventHandler } from './restaurants.handler';

@Module({
  imports: [],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, RestaurantsEventHandler],
})
export class RestaurantsModule {}
