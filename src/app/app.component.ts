import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Product} from "./Shared/Modules/product";
import {NgForOf, NgIf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductListItemComponent} from "./product-list-item/product-list-item.component";
import {ProductService} from "./services/product.service";
import { HttpClientModule } from '@angular/common/http';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ProductListComponent, ProductListItemComponent, RouterLink, MatToolbar, MatAnchor, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'electro media';
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
