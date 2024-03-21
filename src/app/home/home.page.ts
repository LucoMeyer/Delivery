import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shops';
import { cart } from '../models/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  

Shops: Shop[] = [];
Cart!: cart;



  constructor() { }

  ngOnInit() {
this.Shops = JSON.parse(localStorage.getItem('Shops')!);
this.Cart = JSON.parse(localStorage.getItem('Cart')!);
if(this.Shops == null)
{
  this.myDb();
}

this.checkMyCart();

  }


  myDb(){

    this.Shops = [];


    let shop1 = new Shop();
    shop1.shopId = 1;
    shop1.shopName = "Spur";
    shop1.shopDish = "Flame Grilled";
    shop1.shopRating = "5/5 ★★★★★";
    shop1.shopDistance = 7;
    shop1.shopImage = "assets/Images/Spur.png";
    shop1.shopPrice = 200;
    shop1.shopTime = 60;
    this.Shops.push(shop1);

    let shop2 = new Shop();
    shop2.shopId = 2;
    shop2.shopName = "Steers";
    shop2.shopDish = "Barbecue";
    shop2.shopRating = "3/5 ★★★☆☆";
    shop2.shopDistance = 12;
    shop2.shopImage = "assets/Images/steers.jpg";
    shop2.shopPrice = 100;
    shop2.shopTime = 20;
    this.Shops.push(shop2);

    let shop3 = new Shop();
    shop3.shopId = 3;
    shop3.shopName = "Burger King";
    shop3.shopDish = "Fast Food";
    shop3.shopRating = "4/5 ★★★★☆";
    shop3.shopDistance = 10;
    shop3.shopImage = "assets/Images/Burgerking.jpeg";
    shop3.shopPrice = 50;
    shop3.shopTime = 45;
    this.Shops.push(shop3);

    let shop4 = new Shop();
    shop4.shopId = 4;
    shop4.shopName = "Fishaways";
    shop4.shopDish = "Seafood";
    shop4.shopRating = "3/5 ★★★☆☆";
    shop4.shopDistance = 15;
    shop4.shopImage = "assets/Images/Fishaways.jpg";
    shop4.shopPrice = 150;
    shop4.shopTime = 30;
    this.Shops.push(shop4);

    localStorage.setItem('Shops', JSON.stringify(this.Shops))

  }

  checkMyCart(){

    //See if cart exists
    if(this.Cart == null)
    {
      //Initialise new cart
      this.Cart = new cart();  
    }
    
  }

  addToMyCart(sh: Shop){

    //first check for items
    if(this.Cart.Shop != null){
      //let addItem = false;
      
      //console.log(this.Cart.orderchains)
        if(this.Cart.Shop.shopId == sh.shopId){

          this.Cart.Shop.quantity = this.Cart.Shop.quantity + 1;
          this.saveMyCart();
        
      }  
    }
    else
    {
     //Create a new cart
      sh.quantity = 1;

     //add to orderchains
      this.Cart.Shop = sh;
      this.saveMyCart();
    } 
}

  saveMyCart(){

    localStorage.removeItem('Cart');
    localStorage.setItem('Cart', JSON.stringify(this.Cart));



  }




  addOrderToMyCart(){





    }



}
