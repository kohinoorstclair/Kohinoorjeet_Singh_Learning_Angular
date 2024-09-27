import { Component } from '@angular/core';
import {Product} from '../Shared/Modules/product';
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductListItemComponent,
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    { productId: 1, name: 'Laptop', price: 1000, brand: 'Brand A', description: 'High performance', stock: 10 , url: "src/images/OIP.jpeg"},
    { productId: 2, name: 'Phone', price: 600, brand: 'Brand B', description: 'Latest model', url: "src/images/th.jpeg"},
    { productId: 3, name: 'Headphones', price: 200, brand: 'Brand C', description: 'Noise cancelling', stock: 20,url: "src/images/th (1).jpeg" },
    { productId: 4, name: 'Monitor', price: 300, brand: 'Brand D', description: '4K display', stock: 5,url: "src/images/th (2).jpeg" }
  ];

}
