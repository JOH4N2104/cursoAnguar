import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product!:product;
@Output() addCartClick = new EventEmitter<product>();

constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.addCartClick.emit(this.product)
  }

}
