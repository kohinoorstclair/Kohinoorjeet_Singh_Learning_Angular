export interface Product {
  productId: number;
  name: string;
  price: number;
  brand: string;
  model:string;
  description: string;
  stock?: number ;// Optional property
  url?:string;
}

