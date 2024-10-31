import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter, Routes} from "@angular/router";

import { ProductListComponent} from "./app/product-list/product-list.component";
import { ProductListItemComponent} from "./app/product-list-item/product-list-item.component";


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  { path: 'Products', component: ProductListComponent },
  { path: 'Products/:id', component: ProductListItemComponent }
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'))
