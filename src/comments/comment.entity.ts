import {
  Entity,
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
} from '@typedorm/common';

@Entity({
  name: 'comment',
  primaryKey: {
    partitionKey: 'comment#{{id}}',
  },
})
export class Comment {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute()
  restaurantId: string;

  @Attribute()
  user: {
    id: string;
    nickname: string;
    picture?: string;
  };

  @Attribute()
  text: string;

  @Attribute()
  rating: number;

  @Attribute()
  images?: string[];
}
