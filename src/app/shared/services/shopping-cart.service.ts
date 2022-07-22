import { Injectable } from '@angular/core';
import { Observable, Subject, subscribeOn } from 'rxjs';
import { product } from 'src/app/pages/products/interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: product[] =[];

  private carritoSubject = new Subject<product[]>();
  private totalSubject = new Subject<number>();
  private cantidadSubject = new Subject<number>();

  get cartAction$(): Observable<product[]>{
    return this.carritoSubject.asObservable();
  }
  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }
  get cantidadAction$(): Observable<number>{
    return this.cantidadSubject.asObservable();
  }

  updateCart(product:product){
    console.log(product)
    this.addToCart(product);
    this.calcularCantidadDeProductos();
    this.calcularlPrecioTotal();
  }

private calcularCantidadDeProductos(){
  const quantity = this.products.length;
  this.cantidadSubject.next(quantity);
}

private calcularlPrecioTotal(){
  let total = this.products.reduce((a,prod)=> a += prod.price, 0);
  this.totalSubject.next(total);
}

private addToCart(product: product) {
  console.log(product)
this.products.push(product);
this.carritoSubject.next(this.products);
}
}
