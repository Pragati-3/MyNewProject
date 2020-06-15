import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  title = "Welcome My Shop.......!";

  mobParts = [
    {
      id: 1001,
      name: "screen 5.5",
      description: "5.5 Screen for Moto g E6",
      inStock: 5,
      prodColor: "red",
      canPurch: true,
      namecol: "green",
      clsVar: true,
      country: "Australia",
      price: 10000,
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
      price: 12000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
