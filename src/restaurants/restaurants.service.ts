import { Injectable, Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { randomUUID } from 'crypto';
import { Event } from '../core/event.entity';
import { Restaurant } from './restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ListRestaurantsDto } from './dto/list-restaurants.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @Inject('EVENT_CONNECTION') private eventConnection,
    @Inject('VIEW_CONNECTION') private viewConnection,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<{ id: string }> {
    // TODO: Check whether the restaurant already exists
    if (createRestaurantDto.nvPlaceId) {}
    // TODO: Restaurant status
    //  - if the request is from user, set status as 'pending'
    //  - if the request is from admin, set status as 'active' directly

    // Save event source
    const id = randomUUID();
    const event = new Event('restaurant', id, 'created', createRestaurantDto);
    await this.eventConnection.entityManager.create(event);

    // Emit event
    this.eventEmitter.emit('restaurant.created', event);

    return { id: event.id };
  }

  async list(query: ListRestaurantsDto) {
    // // use Elasticsearch
    // const client = new Client({ node: 'http://ec2-3-39-14-188.ap-northeast-2.compute.amazonaws.com:9200' });
    // console.log(client);
    // console.log(await client.cat.indices({ v: true }));
    return `This action returns all restaurants`;
  }

  findOne(id: string) {
    const key = { type: 'restaurant', id };
    return this.viewConnection.entityManager.findOne(Restaurant, key);
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    // Save event source
    const event = new Event('restaurant', id, 'updated', updateRestaurantDto);
    await this.eventConnection.entityManager.create(event);

    // Emit event
    this.eventEmitter.emit('restaurant.updated', event);
  }

  async remove(id: string) {
    // Save event source
    const event = new Event('restaurant', id, 'deleted');
    await this.eventConnection.entityManager.create(event);

    // Emit event
    this.eventEmitter.emit('restaurant.deleted', event);
  }
}
