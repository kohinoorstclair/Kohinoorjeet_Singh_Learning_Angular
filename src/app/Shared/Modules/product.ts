export interface Product {
  productId: string;
  name: string;
  price: number;
  brand: string;
  description: string;
  stock?: number;  // Optional property
}
