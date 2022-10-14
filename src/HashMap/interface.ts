
export interface  HashMap<T> {
  set(key: string | number, value: T): void;
  get(key: string | number, value: T): T;
}