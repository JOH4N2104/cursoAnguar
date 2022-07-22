import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatCardModule} from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  exports: [MatToolbarModule,
  MatCardModule,
MatIconModule],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
