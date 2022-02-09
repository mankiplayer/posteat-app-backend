import { Module, Global, DynamicModule } from '@nestjs/common';
import { createConnection } from '@typedorm/core';
import AWS from 'aws-sdk';
import { DynamoDBEntities } from './dynamodb.interfaces';
import { eventTable, viewTable } from './dynamodb.tables';

// Causes 'Missing region in config' error without this
AWS.config.update({ region: 'ap-northeast-2' });

/**
 * Global module definition for DynamoDB
 */
@Global()
@Module({})
export class DynamoDBModule {
  static forRoot(entities: DynamoDBEntities): DynamicModule {
    return {
      module: DynamoDBModule,
      providers: [
        {
          provide: 'EVENT_CONNECTION',
          useFactory: () =>
            createConnection({
              table: eventTable,
              name: 'events',
              entities: entities.events,
            }),
        },
        {
          provide: 'VIEW_CONNECTION',
          useFactory: () =>
            createConnection({
              table: viewTable,
              name: 'views',
              entities: entities.views,
            }),
        },
      ],
      exports: ['EVENT_CONNECTION', 'VIEW_CONNECTION'],
    };
  }
}
