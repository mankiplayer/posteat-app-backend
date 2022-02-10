import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Event } from '../core/event.entity';
import { User } from './user.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('VIEW_CONNECTION') private viewConnection,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<{ id: string }> {
    // Create view
    const id = randomUUID();
    const user = new User(id);
    user.username = createUserDto.username;
    user.nick = createUserDto.nick;
    user.password = createUserDto.password;
    user.pic = createUserDto.pic;
    try {
      await this.viewConnection.entityManager.create(user);
    } catch (e) {
      console.error(e);
    }

    // Emit event
    const event = new Event('user', user.id, 'created', createUserDto);
    this.eventEmitter.emit('user.created', event);

    return { id };
  }

  async findOne(id: string): Promise<User> {
    const key = { type: 'user', id };
    const user = await this.viewConnection.entityManager.findOne(User, key);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findByUserName(username: string): Promise<User | undefined> {
    const { items } = await this.viewConnection.scanManager.find(
      User,
      { where: { username: { EQ: username } } },
    );
    return items?.[0] ?? null;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    // Update view
    const key = { type: 'user', id };
    await this.viewConnection.entityManager.update(User, key, updateUserDto);

    // Emit event
    const event = new Event('user', id, 'updated', updateUserDto);
    this.eventEmitter.emit('user.updated', event);
  }

  async remove(id: string) {
    // Delete view
    const key = { type: 'user', id };
    await this.viewConnection.entityManager.delete(User, key);
  }
}
