import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { product } from '../../products/interface/product.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  num: number= 0
 total$ = this.shoppingCartSvc.totalAction$ ;
 cantidad$ = this.shoppingCartSvc.cantidadAction$;
 cart$ = this.shoppingCartSvc.cartAction$;

  constructor( private shoppingCartSvc: ShoppingCartService) { }

  deleteProduct(product:product){
    this.shoppingCartSvc.deleteProduct(product);


  }
  actualizarNumber(item:product){
      return item;
  }

  ngOnInit(): void {
  }

}
