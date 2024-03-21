import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Shop } from '../models/shops';
import { cart } from '../models/cart';
import { HomePage } from '../home/home.page';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  
})
export class SearchPage implements OnInit {

  searchString: string = "";
  Shops: Shop[] = [];
  Cart!: cart;
  searchedShops: Shop[] = [];



  constructor() {

    



   }

   ngOnInit() {

    if(this.searchString == ""){
      this.searchedShops = this.Shops;

    }
    
    this.Shops = JSON.parse(localStorage.getItem('Shops')!);
    this.Cart = JSON.parse(localStorage.getItem('Cart')!);

  }


  Search(){

    this.searchedShops = [];

    this.searchedShops = this.Shops.filter(
      (y) => 
      y.shopName.toLowerCase().includes(this.searchString.toLowerCase()) ||
      y.shopRating.toLowerCase().includes(this.searchString.toLowerCase()) ||
      y.shopPrice.toString().toLowerCase().includes(this.searchString.toLowerCase()) ||
      y.shopDish.toLowerCase().includes(this.searchString.toLowerCase()) ||
      y.shopDistance.toString().toLowerCase().includes(this.searchString.toLowerCase()) 


    );

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



}
