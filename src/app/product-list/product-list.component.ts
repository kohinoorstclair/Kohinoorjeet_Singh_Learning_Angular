import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../Shared/Modules/product';
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf} from "@angular/common";
import { ProductService } from '../services/product.service';
import {products} from "../data/mock-content";
import {Router} from "@angular/router";


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
export class ProductListComponent  implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (productData: Product[]) => {
        this.products = productData;
      },
    });
  }

  // Navigate to modify-product page without product ID
  // Updated onEdit method in ProductListComponent
  onEdit(productId: number): void {
    this.router.navigate(['/modify-product', productId]);  // Pass productId to the modify-product page
  }


  // Delete a product
  onDelete(productId: number): void {
    this.productService.removeProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.productId !== productId);
    });
  }
}
