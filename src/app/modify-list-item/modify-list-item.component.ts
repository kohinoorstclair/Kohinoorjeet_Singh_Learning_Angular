import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Product} from "../Shared/Modules/product";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Ensure ID is a positive number
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]], // No special characters
      price: ['', [Validators.required, Validators.min(0)]], // Price must be a non-negative number
      brand: ['', Validators.required],
      description: ['', Validators.required],
      stock: ['', Validators.min(0)], // Stock should be non-negative if provided
      url: ['', Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)] // URL validation for image
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      console.log('Product submitted:', product);
      this.productForm.reset(); // Reset form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}
