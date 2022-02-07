import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { ListRestaurantsDto } from './dto/list-restaurants.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  create(createRestaurantDto: CreateRestaurantDto) {
    // 1. check whether the restaurant already exists
    // 2. get restaurant detail from Naver
    // 3. create restaurant
    //  - if the request is from user, set status as 'pending'
    //  - if the request is from admin, set status as 'active' directly
    return 'This action adds a new restaurant';
  }

  list(query: ListRestaurantsDto) {
    // use Elasticsearch
    return `This action returns all restaurants`;
  }

  findOne(id: string) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: string) {
    return `This action removes a #${id} restaurant`;
  }
}
