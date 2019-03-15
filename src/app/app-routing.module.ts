import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { EventsComponent } from './views/events/events.component';
import { AboutComponent } from './views/about/about.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'about', component: AboutComponent},
];

@
NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent, ProductsComponent, EventsComponent, AboutComponent
];
