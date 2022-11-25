
export interface DataCache {
  set(key: string | number, value: any): void;
  read(key: number | string): any;
}