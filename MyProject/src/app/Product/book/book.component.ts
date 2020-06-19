import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {
  laptops = [
    {
      id: 1001,
      name: "Languge Book",
      eBookfeatures: "take notes",
      inStock: 0,
      prodColor: "red",
      namecol: "green",
      WordWise: true,
      Length: "366 pages",
      price: 150,
    },
    {
      id: 1002,
      name: "Stries Book",
      eBookfeatures: "Highlight, take notes, and search",
      inStock: 8,
      namecol: "Red",
      WordWise: true,
      Length: "366 pages",
      price: 500,
    },
    {
      id: 1003,
      name: "Languge Book",
      eBookfeatures: "take notes",
      inStock: 0,
      prodColor: "red",
      namecol: "green",
      WordWise: true,
      Length: "366 pages",
      price: 150,
      },
      {
        id: 1004,
        name: "Languge Book",
        eBookfeatures: "take notes",
        inStock: 0,
        prodColor: "red",
        namecol: "green",
        WordWise: true,
        Length: "366 pages",
        price: 150,
        },
]
constructor() { }

  ngOnInit(): void {
  }

}
