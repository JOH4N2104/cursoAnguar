import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common'

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,


  ]
})
export class ProductsModule { }
