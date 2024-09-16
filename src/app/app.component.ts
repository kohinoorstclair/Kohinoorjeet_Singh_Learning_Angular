import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from "./Shared/Modules/product";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kohinoorjeet-Singh-Learning-Angular';
  about = 'you can find the best products here';


   product1: Product = { productId: '001', name: 'Laptop', price: 1000, brand: 'dell', description: 'High-end laptop' };
  product2: Product={ productId: '002', name: 'Smartphone', price: 700, brand: 'samsung', description: 'Latest model' };
product3: Product={ productId: '003', name: 'Headphones', price: 150, brand: 'boat', description: 'Noise-cancelling' };
product4: Product= { productId: '004', name: 'Monitor', price: 300, brand: 'hp', description: '4K Ultra HD', stock: 10 };
product5: Product ={ productId: '005', name: 'Keyboard', price: 50, brand: 'hp', description: 'Mechanical keyboard', stock: 20 };
product6: Product= { productId: '006', name: 'Mouse', price: 30, brand: 'dell', description: 'Wireless mouse' }
products: Product[] = [this.product1,this.product2,this.product3,this.product4,this.product5,this.product6];

}
