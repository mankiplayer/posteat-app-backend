import { Event } from '../../dynamodb/dynamodb.entities';

export class CommentEvent extends Event<{
  text: string;
  rating: number;
  images?: string;
}> {}
