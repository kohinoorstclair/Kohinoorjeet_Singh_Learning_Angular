import { Component } from '@angular/core';
import {Product} from '../Shared/Modules/product';
import {ProductListItemComponent} from "../product-list-item/product-list-item.component";
import {NgForOf} from "@angular/common";


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
export class ProductListComponent {



}
