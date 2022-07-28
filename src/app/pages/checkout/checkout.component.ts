import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Details } from 'src/app/shared/interface/order.interface';
import { Store } from 'src/app/shared/interface/store.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { product } from '../products/interface/product.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  bool: boolean = false;
  cart: product[] = []
  model = {
    name: '',
    store: '',
    shippingAdress: '',
    city: ''
  }
  tiendas: Store[] = []
  constructor(private dataSvc: DataService, private shoppingCartSvc: ShoppingCartService, private router: Router) { }
  onPickupOrDelivery(bool: boolean) {
    this.bool = bool
  }

  onSubmit({ value: formData }: NgForm) {
    console.log(formData)
    //insertamos los datos recogidos del formulario  a este nuevo objeto, ademas de añadirle fecha
    const data = {
      ...formData,
      date: this.getCurrentDate(),
      isDelivery: this.bool
    }
    this.dataSvc.saveOrder(data).pipe(tap(res => console.log(res, "holaaaaa")),
      switchMap((order) => {
        const orderId = order.id
        const details = this.prepareDetails();
        return this.dataSvc.saveDeailsOrder({ details, orderId })
      }),
      tap(()=> this.router.navigate(['checkout/thank-you-page'])),
      delay(2000),
      tap(()=> this.shoppingCartSvc.resetCart())
    ).subscribe();

  }

  // se recorre el carrito con un for each y se sacan los datos necesarios para guardar los dtaless
  private prepareDetails() {
    console.log("preparando detalles")
    const details: Details[] = []
    this.cart.forEach((product: product) => {
      const { id: productId, name: productName, qty: quantity, stock } = product;
      details.push({ productId, productName, quantity });
    })
    return details
  }

  private getDataCart() {
    console.log("tryendo el carrito")
    this.shoppingCartSvc.cartAction$.pipe(tap((products: product[]) => this.cart = products)).subscribe();
  }

  private getCurrentDate() {
    return new Date().toLocaleDateString();
  }
  private getStores() {
    this.dataSvc.getStores().pipe(tap((tiendas: Store[]) => this.tiendas = tiendas)).subscribe();
  }
  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
  }

}
