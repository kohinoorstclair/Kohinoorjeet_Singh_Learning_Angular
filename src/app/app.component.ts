import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from "./Shared/Modules/product";
import {NgForOf, NgIf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductListItemComponent} from "./product-list-item/product-list-item.component";
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ProductListComponent, ProductListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kohinoorjeet-Singh-Learning-Angular';
  about = 'you can find the best products here';
  selectedProduct?: Product;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProductById(2);
  }

  getProductById(productId: number): void {
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        this.selectedProduct = product;
      },
      error: (err) => console.error("Error fetching product", err)
    });
  }


  onProductSelected(product: any) {
    this.selectedProduct = product;
  }

}
