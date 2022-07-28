import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common'


import { MaterialModule } from 'src/app/material/material.module';
import { InicioRoutingModule } from './inicio-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,


  ]
})
export class InicioModule { }
