import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter, Routes} from "@angular/router";

import { ProductListComponent} from "./app/product-list/product-list.component";
import { ProductListItemComponent} from "./app/product-list-item/product-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import{ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


const routes: Routes = [
  { path: 'Products', component: ProductListComponent },
  { path: 'Products/:id', component: ProductListItemComponent },
  {path: 'modify-product', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'))
