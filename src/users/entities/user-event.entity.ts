import { Event } from '../../dynamodb/dynamodb.entities';
import { User } from './user.entity';

export class UserEvent extends Event<User> {}
