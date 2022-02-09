import {
  Entity,
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
} from '@typedorm/common';

/**
 * Event entity
 * MSA에서는 각 microservice에서 관리하나 이 프로젝트에서는 하나의 이벤트 테이블에 저장한다.
 */
@Entity({
  name: 'event',
  primaryKey: {
    partitionKey: '{{type}}#{{id}}',
    sortKey: '{{timestamp}}',
  },
})
export class Event<T = object> {
  @Attribute()
  type: string;

  @Attribute()
  id: string;

  @Attribute()
  event: string;

  @Attribute()
  data?: Partial<T>;

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.ISO_DATE,
    autoUpdate: false,
  })
  timestamp: number;
}
