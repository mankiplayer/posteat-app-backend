import {
  Attribute,
  AutoGenerateAttribute,
  Entity,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
} from '@typedorm/common';

@Entity({
  name: 'user',
  primaryKey: {
    partitionKey: 'user#{{id}}',
  },
})
export class User {
  /** ID */
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  /** username (login name) */
  @Attribute({ unique: true })
  username: string;

  /** nickname */
  @Attribute()
  nick: string;

  /** profile image URL */
  @Attribute()
  pic: string;
}
