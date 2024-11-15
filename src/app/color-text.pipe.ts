import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./Shared/Modules/product";

@Pipe({
  name: 'colorText',
  standalone: true
})
export class ColorTextPipe implements PipeTransform {

  transform(product:Product ): String {


      return `<span style="color: red">${product.stock}</span>`;


  }
}
