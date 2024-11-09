// src/app/in-memory-data.service.ts
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Product} from "./Shared/Modules/product";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb():{Product : Product[]}{
  const Product :Product[]= [
    { productId: 1, name: 'Laptop', price: 1000, brand: 'Dell', description: 'High performance', stock: 10, url: 'OIP.jpeg' },
    { productId: 2, name: 'Phone', price: 600, brand: 'HP', description: 'Latest model', url: 'th.jpeg' },
    { productId: 3, name: 'Headphones', price: 200, brand: 'Samsung', description: 'Noise cancelling', stock: 20, url: 'th (1).jpeg' },
    { productId: 4, name: 'Monitor', price: 300, brand: 'Macintosh', description: '4K display', stock: 5, url: 'th (2).jpeg' }
  ];

  return { Product };
  }
}
