import { Inject } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Event } from '../core/event.entity';
import { Restaurant } from './restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { UpdateCommentDto } from '../comments/dto/update-comment.dto';

export class RestaurantsEventHandler {
  constructor(@Inject('VIEW_CONNECTION') private viewConnection) {}

  @OnEvent('restaurant.created')
  async handleRestaurantCreatedEvent(event: Event<CreateRestaurantDto>) {
    const restaurant = new Restaurant(event.id);
    restaurant.nvPlaceId = event.payload.nvPlaceId;
    restaurant.name = event.payload.name;
    restaurant.category = event.payload.category;
    restaurant.summary = event.payload.summary;
    restaurant.image = event.payload.image;
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
    restaurant.michelinGuide = null;
    restaurant.inMedia = null;
    restaurant.reviewCount = 0;
    restaurant.avgRating = 0;

    await this.viewConnection.entityManager.create(restaurant);
  }

  @OnEvent('restaurant.updated')
  async handleRestaurantUpdatedEvent(event: Event<UpdateRestaurantDto>) {
    const key = { type: 'restaurant', id: event.id };
    await this.viewConnection.entityManager.update(
      Restaurant,
      key,
      event.payload,
    );
  }

  @OnEvent('restaurant.deleted')
  async handleRestaurantDeletedEvent(event: Event<{ id: string }>) {
    const key = { type: 'restaurant', id: event.id };
    await this.viewConnection.entityManager.delete(Restaurant, key);
  }

  @OnEvent('comment.created')
  async handleCommentCreatedEvent(event: Event<CreateCommentDto>) {
    const key = { type: 'restaurant', id: event.payload.restaurantId };
    const view = await this.viewConnection.entityManager.findOne(Restaurant, key);

    const reviewCount = view.reviewCount + 1;
    const avgRating = 0; // TODO: recalculate
    await this.viewConnection.entityManager.update(
      Restaurant,
      key,
      { reviewCount, avgRating },
    );
  }

  @OnEvent('comment.updated')
  async handleCommentUpdatedEvent(event: Event<UpdateCommentDto>) {
    // TODO
  }

  @OnEvent('comment.deleted')
  async handleCommentDeletedEvent(event: Event) {
    // TODO
  }
}
