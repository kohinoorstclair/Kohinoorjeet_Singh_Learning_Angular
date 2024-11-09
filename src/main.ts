import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/services/in-memory-data.service";

import { ProductListComponent } from "./app/product-list/product-list.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";

// Define the routes
const routes: Routes = [
  { path: 'Products', component: ProductListComponent },
  { path: 'modify-product', component: ModifyListItemComponent },
  { path: 'modify-product/:id', component: ModifyListItemComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard for unmatched routes
];

// Bootstrap the Angular app
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // HTTP client configuration
    provideRouter(routes), // Router configuration
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })) // Use importProvidersFrom
  ]
}).then(r => console.log('Bootstrap successful'))
  .catch(err => console.error(err));
