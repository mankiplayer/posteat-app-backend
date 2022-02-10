import { Entity, Attribute } from '@typedorm/common';
import { TypedEntity } from '../dynamodb/dynamodb.entity';

@Entity({
  name: 'user',
  primaryKey: {
    partitionKey: '{{type}}#{{id}}',
  },
})
export class User extends TypedEntity<'user'> {
  constructor(id: string) {
    super('user', id);
  }

  /** username (login name) */
  @Attribute({ unique: true })
  username: string;

  @Attribute()
  password: string;

  /** nickname */
  @Attribute()
  nick: string;

  /** profile image URL */
  @Attribute()
  pic?: string;
}
