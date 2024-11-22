import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Products', loadComponent: () => import('./app/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'modify-product',component:ModifyListItemComponent },
  { path: 'modify-product/:id', loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ]
}).catch((err) => console.error(err));
