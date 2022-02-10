import { Attribute } from '@typedorm/common';

export abstract class TypedEntity<Type extends string = string> {
  protected constructor(type: Type, id: string) {
    this.type = type;
    this.id = id;
  }

  @Attribute()
  type: Type;

  @Attribute()
  id: string;
}
