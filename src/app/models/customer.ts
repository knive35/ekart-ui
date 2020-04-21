import { Address } from './address';
import { Cart } from './cart';
import { Order } from './order';

export class Customer {
    emailId:String;
    name:String;
    password:String;
    phoneNo:String
    addresses:Array<Address>;
    cart:Array<Cart>;
    orders:Array<Order>;
}
