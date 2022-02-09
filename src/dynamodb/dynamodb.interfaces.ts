import { EntityTarget } from '@typedorm/common';

export interface DynamoDBEntities {
  events: EntityTarget<any>[];
  views: EntityTarget<any>[];
}
