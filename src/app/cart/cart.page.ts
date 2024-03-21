import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shops';
import { cart } from '../models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  //Shops: Shop[] = [];
  cart!: cart;
 //shop: Shop = new Shop();

  constructor() { }

  ngOnInit() {

   // this.Shops = JSON.parse(localStorage.getItem('Shops')!);
    this.cart = JSON.parse(localStorage.getItem('Cart')!);
    console.log(this.cart);

  }




  

  


}
