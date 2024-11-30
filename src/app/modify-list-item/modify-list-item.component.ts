import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../Shared/Modules/product";
import {NgForOf, NgIf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";
import {MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatCardModule,
    NgForOf,
    NgIf,
    HighlightOnFocusDirective,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatButton, MatFormFieldModule,
    MatInputModule, MatTooltip
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

      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      brand: ['', Validators.required],
      description: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]]
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
  errorMessage: string | null = null;

  onSubmit(): void {
    this.productService.updateProduct(this.productForm.value).subscribe({
      next: () => this.router.navigate(['/Products']),
      error: (err) => this.errorMessage = "Error updating product."
    });
  }





  // Reset form
  onReset(): void {
    this.productForm.reset();
  }
}
