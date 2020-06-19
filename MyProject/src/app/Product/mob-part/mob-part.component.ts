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
      id: 1002,
      name: "SCREEN 5",
      description: "5 Screen for Samsung",
      inStock: 8,
      prodColor: "blue",
      canPurch: false,
      namecol: "Red",
      clsVar: true,
      country: "India",
      prodimage:'mob2.png',
      price: 50000,
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
      country: "USA",
      prodimage:'79_.jpg',
      price: 12000,
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

}
