import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./Shared/Modules/product";


@Pipe({
  name: 'modelCombine',
  standalone: true
})
export class ModelCombinePipe implements PipeTransform {

  transform(product:Product): String {
    return `${product.model} ${product.brand}`;
  }

}
