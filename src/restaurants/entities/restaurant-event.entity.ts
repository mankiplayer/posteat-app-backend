import {
  Entity,
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
} from '@typedorm/common';

@Entity({
  name: 'event',
  primaryKey: {
    partitionKey: '{{type}}#{{id}}',
    sortKey: '{{timestamp}}',
  },
})
export class RestaurantEvent {
  @Attribute()
  type: string;

  @Attribute()
  id: string;

  @Attribute()
  event: string;

  @Attribute()
  data?: any;

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.ISO_DATE,
    autoUpdate: false,
  })
  timestamp: number;
}
