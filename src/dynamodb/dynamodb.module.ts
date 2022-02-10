import { Module, Global, DynamicModule } from '@nestjs/common';
import { EntityTarget } from '@typedorm/common';
import { createConnection } from '@typedorm/core';
import AWS from 'aws-sdk';
import { Event } from '../core/event.entity';
import { eventTable, viewTable } from './dynamodb.tables';

// Causes 'Missing region in config' error without this
AWS.config.update({ region: 'ap-northeast-2' });

/**
 * Global module definition for DynamoDB
 */
@Global()
@Module({})
export class DynamoDBModule {
  static forRoot(entities: EntityTarget<any>[]): DynamicModule {
    return {
      module: DynamoDBModule,
      providers: [
        // Connection for Event Sourcing
        {
          provide: 'EVENT_CONNECTION',
          useFactory: () =>
            createConnection({
              table: eventTable,
              name: 'events',
              entities: [Event],
            }),
        },
        // Connection for view entities
        {
          provide: 'VIEW_CONNECTION',
          useFactory: () =>
            createConnection({
              table: viewTable,
              name: 'views',
              entities,
            }),
        },
      ],
      exports: ['EVENT_CONNECTION', 'VIEW_CONNECTION'],
    };
  }
}
