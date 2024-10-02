import { Injectable } from '@angular/core';
import { products } from '../data/mock-content';
import {Observable, of} from "rxjs";
import {Product} from "../Shared/Modules/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
