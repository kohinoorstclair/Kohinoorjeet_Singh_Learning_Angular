import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Product } from '../Shared/Modules/product';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'api/products';  // API endpoint for mock data

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Get a product by ID
  getProductById(productId: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`).pipe(catchError(this.handleError));
  }

  // Add a new product
  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct).pipe(catchError(this.handleError));
  }

  // Update an existing product
  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${updatedProduct.productId}`, updatedProduct).pipe(catchError(this.handleError));
  }

  // Delete a product
  removeProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${productId}`).pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
