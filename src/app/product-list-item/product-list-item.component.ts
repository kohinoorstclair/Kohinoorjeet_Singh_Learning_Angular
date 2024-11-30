import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../Shared/Modules/product";
import {CurrencyPipe, NgIf, NgOptimizedImage, NgStyle, PercentPipe, UpperCasePipe} from "@angular/common";
import {ModelCombinePipe} from "../model-combine.pipe";
import {ColorTextPipe} from "../color-text.pipe";
import {HoverHighlightDirective} from "../hover-highlight.directive";
import {ShowDetailsOnHoverDirective} from "../show-details-on-hover.directive";
import {ChangeDetectionStrategy, } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule,MatListModule, MatDividerModule,
    NgIf,
    NgStyle,
    NgOptimizedImage,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    ModelCombinePipe,
    ColorTextPipe,
    HoverHighlightDirective,
    ShowDetailsOnHoverDirective
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
