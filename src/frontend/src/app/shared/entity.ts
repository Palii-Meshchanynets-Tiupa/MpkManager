
export class Entity {
  id: number;
  version: number;
}

export class DictionaryEntity extends Entity {
  name: string;
  description: string;
}
