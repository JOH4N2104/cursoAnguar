import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cantidad$ ;
  total$ ;
  cart$;
    constructor( shoppingCartSvc:ShoppingCartService ) {
      this.cantidad$ = shoppingCartSvc.cantidadAction$
      this.total$ = shoppingCartSvc.totalAction$
      this.cart$ = shoppingCartSvc.cartAction$
    }
  ngOnInit(): void {
  }

}
