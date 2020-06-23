import { Component, OnInit } from '@angular/core';
import { MobParts } from './mob-part';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styles: []
})
export class MobPartComponent implements OnInit {

  mobParts:MobParts[] = [
    
    {
      id: 1001,
      name: "SCREEN 6.9",
      description: "9 Screen for Redmi",
      inStock: 2,
      prodColor: "gray",
      canPurch: false,
      namecol: "Red",
      clsVar: true,
      country: "India",
      prodimage:'pr.jpg',
      price: 50000,
      quantity: 2,
    },
    {
      id: 1002,
      name: "SCREEN 5",
      description: "5 Screen for Samsung",
      inStock: 8,
      prodColor: "blue",
      canPurch: false,
      namecol: "Red",
      clsVar: true,
      country: "India",
      prodimage:'images.jpg',
      price: 50000,
      quantity: 3,
    },
    {
      id: 1003,
      name: "Key Panel",
      description: "Redmi Note 9 pro",
      inStock: 0,
      namecol: "yellow",
      prodColor: "green",
      canPurch: true,
      clsVar: true,
      country: "Germany",
      prodimage:'1500_.jpg',
      price: 9000,
      quantity: 0,
    },
    {
      id: 1004,
      name: "SCREEN 3",
      description: "Key panel for Nokia",
      inStock: 1,
      prodColor: "orange",
      namecol: "violet",
      canPurch: true,
      clsVar: true,
      country: "India",
      prodimage:'79_.jpg',
      price: 12000,
      quantity: 2,
    },
  ];


  calcProd(){
    let tot=0;
    for(let mobPart of this.mobParts){
      tot=tot + mobPart.inStock;
    }

    return tot;
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(mobPart) {
    // alert('We are in upQuantity');
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }
  catchVal(event) {
    console.log("we are in 'catchVal' ", event);
  }
}


