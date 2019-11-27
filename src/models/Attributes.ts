export class Attributes<T> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    // get method only accept the key of the T and return a type of the T with a K element
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
