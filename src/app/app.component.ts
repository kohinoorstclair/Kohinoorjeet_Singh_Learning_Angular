import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from "./Shared/Modules/product";
import {NgForOf, NgIf} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kohinoorjeet-Singh-Learning-Angular';
  about = 'you can find the best products here';


}
