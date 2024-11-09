import { Injectable } from '@angular/core';
import { products } from '../data/mock-content';
import {Observable, of} from "rxjs";
import {Product} from "../Shared/Modules/product";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Product[] = products;
  private apiUrl = 'api/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(productId: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${updatedProduct.productId}`, updatedProduct);
  }

  removeProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${productId}`);
  }
}
