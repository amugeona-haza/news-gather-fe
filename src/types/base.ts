export type Nullable<T> = T | null;

export interface MockItem {
  image: {
    src: string;
    alt: string;
  }
  order: number;
  title: string;
  content: string;
  url?: string;
}
