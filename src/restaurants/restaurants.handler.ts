import { Inject } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Event } from '../core/event.entity';
import { Restaurant } from './restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

export class RestaurantsEventHandler {
  constructor(@Inject('VIEW_CONNECTION') private viewConnection) {}

  @OnEvent('restaurant.created')
  async handleRestaurantCreatedEvent(event: Event<CreateRestaurantDto>) {
    const restaurant = new Restaurant();
    restaurant.id = event.id;
    restaurant.nvPlaceId = event.payload.nvPlaceId;
    restaurant.name = event.payload.name;
    restaurant.category = event.payload.category;
    restaurant.summary = event.payload.summary;
    restaurant.image = event.payload.image;
    // restaurant.reviewCount = event.payload.;
    // restaurant.avgRating = event.payload.;
    restaurant.michelinGuide = null;
    restaurant.description = event.payload.description ?? '';
    restaurant.extraImages = event.payload.extraImages ?? [];
    restaurant.phone = event.payload.phone ?? '';
    restaurant.address = event.payload.address ?? '';
    restaurant.location = null;
    restaurant.way = event.payload.way ?? '';
    restaurant.keywords = event.payload.keywords ?? [];
    restaurant.menus = null;
    restaurant.menuImages = null;
    restaurant.facilities = null;
    restaurant.channels = null;
    restaurant.inMedia = null;

    await this.viewConnection.entityManager.create(restaurant);
  }

  @OnEvent('restaurant.updated')
  async handleRestaurantUpdatedEvent(event: Event<UpdateRestaurantDto>) {
    await this.viewConnection.entityManager.update(
      Restaurant,
      { id: event.id },
      event.payload,
    );
  }

  @OnEvent('restaurant.deleted')
  async handleRestaurantDeletedEvent(event: Event) {
    await this.viewConnection.entityManager.delete(
      Restaurant,
      { id: event.id },
    );
  }
}
