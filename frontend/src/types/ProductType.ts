export type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
  added: boolean;
  removed: boolean;
  timeAddedToCart: Date;
  timeRemovedFromCart: Date;
};
