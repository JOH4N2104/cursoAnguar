import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRadioModule }from '@angular/material/radio'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  exports: [MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
   MatRadioModule,
   MatOptionModule,
  MatSelectModule],

  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
