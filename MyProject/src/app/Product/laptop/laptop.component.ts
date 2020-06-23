import { Component, OnInit } from '@angular/core';
import { LaptOps } from './data';

@Component({
  selector: 'app-laptop',
  templateUrl:'./laptop.component.html',
  styles: []
})
export class LaptopComponent implements OnInit {

  laptops:LaptOps[] = [
   
    {
      id: 1001,
      name: "HP 101",
      description: "5 Screen",
      inStock: 8,
      lapimg:"download (3).jpg",
      prodColor: "blue",
      namecol: "Red",
      clsVar: true,
      country: "India",
      price: 50000,
    },
    {
      id: 1002,
      name: "Lenov",
      description: "5.5 Screen",
      inStock: 2,
      prodColor: "red",
      lapimg:"download (2).jpg",
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 30000,
    },
    {
      id: 1003,
      name: "Lenov",
      description: "5.5 Screen",
      inStock: 3,
      prodColor: "red",
      lapimg:"d.jpg",
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 10000,
    },
    {
      id: 1004,
      name: "Dell",
      description: "15.6 Screen HD",
      lapimg:"download1.jpg",
      prodColor: "red",
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 20000,
      inStock:2,
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
