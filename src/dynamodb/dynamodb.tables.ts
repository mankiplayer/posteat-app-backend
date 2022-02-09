import { Table } from '@typedorm/common';

export const eventTable = new Table({
  name: 'posteat-events',
  partitionKey: 'pkey',
  sortKey: 'timestamp',
});

export const viewTable = new Table({
  name: 'posteat-views',
  partitionKey: 'pkey',
});
