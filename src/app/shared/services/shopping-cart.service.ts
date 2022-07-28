import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, subscribeOn } from 'rxjs';
import { product } from 'src/app/pages/products/interface/product.interface';

@Injectable({
  //En este caso, providedIn: 'root' especifica que el servicio debe proporcionarse en el inyector raíz
  //ademas sirve para eliminar el servicio del paquete final si la aplicación no lo usa.
  providedIn: 'root'
})
export class ShoppingCartService {
  products: product[] =[];
// bahaviorSubject es un tipo de obserbable que almacena todos los datos anteriores (no lo entiendo bien)
  private carritoSubject = new BehaviorSubject<product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private cantidadSubject = new BehaviorSubject<number>(0);

  // devuelven los atributos como observables
  get cartAction$(): Observable<product[]>{
    return this.carritoSubject.asObservable();
  }
  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }
  get cantidadAction$(): Observable<number>{
    return this.cantidadSubject.asObservable();
  }

  // metodo que actualiza el array de productos
  updateCart(product:product){
    console.log(product)
    this.addToCart(product);
    this.calcularCantidadDeProductos();
    this.calcularlPrecioTotal();
  }

private calcularCantidadDeProductos(){
  const quantity = this.products.reduce((a,prod)=> a +=  prod.qty, 0);
  this.cantidadSubject.next(quantity);
}


private calcularlPrecioTotal(){
  // el metodo reduce recorre todo el array
  let total = this.products.reduce((a,prod)=> a += (prod.price * prod.qty), 0);
  this.totalSubject.next(total);
}

private addToCart(product: product) {
  //este metodo find lo que hace es que  si encuentra el id del producto que se le envio va a devolver el preoducto
  //pero si no devuelve undefined
  const productExist = this.products.find(({id}) => (id == product.id));
  if (productExist){
    productExist.qty +=1
  }else{
    product.qty = 1;
    this.products.push(product)
  }
  console.log(product)
this.carritoSubject.next(this.products);
}

// resetea el carrito cada vez que se realiza una compra
resetCart(){
  this.carritoSubject.next([]);
  this.cantidadSubject.next(0);
  this.totalSubject.next(0)
}
}
