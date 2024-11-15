import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../Shared/Modules/product";
import {CurrencyPipe, NgIf, NgOptimizedImage, NgStyle, PercentPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product?: any;
  @Input() index?: number=0;
  @Output() selectProduct = new EventEmitter<any>();

  onSelectProduct() {
    this.selectProduct.emit(this.product);
  }
}
