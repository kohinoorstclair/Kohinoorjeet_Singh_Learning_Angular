import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../Shared/Modules/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      { productId: 1, name: 'Laptop', price: 1000, brand: 'Dell', description: 'High performance', stock: .1, url: 'OIP.jpeg' },
      { productId: 2, name: 'Phone', price: 600, brand: 'HP', description: 'Latest model', stock: 2, url: 'th.jpeg' },
      { productId: 3, name: 'Headphones', price: 200, brand: 'Samsung', description: 'Noise cancelling', stock: 1, url: 'th (1).jpeg' },
      { productId: 4, name: 'Monitor', price: 300, brand: 'Macintosh', description: '4K display', stock: .5, url: 'th (2).jpeg' }
    ];
    return { products };
  }
}
