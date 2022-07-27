export interface Details{
productId:number;
productName:string;
quantity:number;
}

export interface Order{
  name:string;
  shippingAdress: string;
  city: string;
  isDelivery: boolean;
  id: number
}

export interface OrderDetails{
  details: Details[];
  orderId: number;

}
