import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../Shared/Modules/product';
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import { ProductService } from '../services/product.service';
import {products} from "../data/mock-content";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {HoverHighlightDirective} from "../hover-highlight.directive";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTooltip} from "@angular/material/tooltip";



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule,
    ProductListItemComponent,
    NgForOf,
    NgIf,
    HoverHighlightDirective, MatTooltip
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit {
  products: Product[] = [];

  errorMessage: string | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (productData: Product[]) => {
        this.products = productData;
        this.errorMessage = null;  // Clear any previous error messages
      },
      error: (err) => {
        console.error("Error fetching products", err);
        this.errorMessage = "Failed to load products. Please try again later.";
      }
    });
  }




  onEdit(productId: number): void {
    this.router.navigate(['/modify-product', productId]);
  }



  onDelete(productId: number): void {
    this.productService.removeProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.productId !== productId);
        this.errorMessage = null;  // Clear any previous error messages
      },
      error: (err) => {
        console.error("Error deleting product", err);
        this.errorMessage = `Failed to delete product with ID ${productId}. Please try again.`;
      }
    });
  }

}
