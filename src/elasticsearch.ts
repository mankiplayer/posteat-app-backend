import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class Elasticsearch {
  readonly client: Client;

  constructor() {
    this.client = new Client({
      node: 'http://ec2-3-39-14-188.ap-northeast-2.compute.amazonaws.com:9200',
    });
  }
}
