import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../Shared/Modules/product";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  selectedProduct: Product | undefined;
  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({


    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      if (productId) {
        this.isEditMode = true;
        this.productService.getProductById(productId).subscribe((product) => {
          if (product) {
            this.selectedProduct = product;
            this.populateForm(this.selectedProduct);
          }
        });
      } else {
        this.isEditMode = false;
        this.productForm.reset();
      }
    });


}


  populateForm(product: Product): void {
    this.productForm.patchValue({
      productId: product.productId, // Populate product ID
      name: product.name,
      price: product.price,
      brand: product.brand,
      description: product.description,
      stock: product.stock
    });
  }



  // Handle the form submission
  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const productData: Product = this.productForm.value;

    if (this.isEditMode) {
      // Update existing product
      this.productService.updateProduct(productData).subscribe(() => {
        this.router.navigate(['/Products']);
      });
    } else {
      // Create new product
      this.productService.addProduct(productData).subscribe(() => {
        this.router.navigate(['/Products']);
      });
    }
  }



  // Reset form
  onReset(): void {
    this.productForm.reset();
  }
}
