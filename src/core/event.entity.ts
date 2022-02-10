import {
  Entity,
  Attribute,
  AutoGenerateAttribute,
  AUTO_GENERATE_ATTRIBUTE_STRATEGY,
} from '@typedorm/common';
import { TypedEntity } from '../dynamodb/dynamodb.entity';

/**
 * EventSource entity
 * MSA에서는 각 microservice에서 관리해야 하나 이 프로젝트에서는 하나의 이벤트 테이블에 저장한다.
 */
@Entity({
  name: 'event',
  primaryKey: {
    partitionKey: '{{type}}#{{id}}',
    sortKey: '{{timestamp}}',
  },
})
export class Event<T = never> extends TypedEntity {
  constructor(type: string, id: string, event: string, payload?: any) {
    super(type, id);
    this.id = id;
    this.event = event;
    this.payload = payload ?? {};
  }

  @Attribute()
  event: string;

  @Attribute()
  payload: T;

  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.ISO_DATE,
    autoUpdate: false,
  })
  timestamp: number;
}
