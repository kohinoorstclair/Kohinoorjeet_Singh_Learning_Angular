import {Component, Input} from '@angular/core';
import {Product} from "../Shared/Modules/product";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product?: any;
}
