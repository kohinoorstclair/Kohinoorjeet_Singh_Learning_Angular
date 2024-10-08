import { Injectable } from '@angular/core';
import { products } from '../data/mock-content';
import {Observable, of} from "rxjs";
import {Product} from "../Shared/Modules/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Product[] = products;
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.productList);
  }
  getProductById(productId: number): Observable<Product | undefined> {
    const product = this.productList.find(product => product.productId === productId);
    return of(product);
  }

  addProduct(newProduct: Product): Observable<Product[]> {
    this.productList.push(newProduct);
    return of(this.productList);
  }

  updateProduct(updatedProduct: Product): Observable<Product[]> {
    const index = this.productList.findIndex(product => product.productId === updatedProduct.productId);
    if (index !== -1) {
      this.productList[index] = updatedProduct;
    }
    return of(this.productList);
  }

  removeProduct(productId: number): Observable<Product | undefined> {
    const productToRemove = this.productList.find(product => product.productId === productId);
    this.productList = this.productList.filter(product => product.productId !== productId);
    return of(productToRemove);
  }
}









