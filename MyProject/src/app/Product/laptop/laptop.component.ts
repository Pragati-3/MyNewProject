import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl:'./laptop.component.html',
  styles: []
})
export class LaptopComponent implements OnInit {

  laptops = [
    {
      id: 1001,
      name: "Dell",
      description: "15.6 Screen HD",
      inStock: 0,
      prodColor: "red",
      // canPurch: true,
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 10000,
    },
    {
      id: 1002,
      name: "HP 101",
      description: "5 Screen",
      inStock: 8,
      prodColor: "blue",
      // canPurch: false,
      namecol: "Red",
      clsVar: true,
      country: "India",
      price: 50000,
    },
    {
      id: 1003,
      name: "Lenov",
      description: "5.5 Screen",
      inStock: 2,
      prodColor: "red",
      // canPurch: true,
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 10000,
    },
    {
      id: 1003,
      name: "Lenov",
      description: "5.5 Screen",
      inStock: 3,
      prodColor: "red",
      // canPurch: true,
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 10000,
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
