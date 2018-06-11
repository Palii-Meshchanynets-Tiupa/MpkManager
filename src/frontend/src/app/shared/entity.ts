
export class Entity {
  id: number | null;
  version: number;

  isNew(): boolean {
    return this.id == null;
  }
}

export class DictionaryEntity extends Entity {
  name: string;
  description: string;
}
