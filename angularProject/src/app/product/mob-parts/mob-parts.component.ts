import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: []
})
export class MobPartsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mobParts = [
    {
      id: 1001,
      name: "Samsung",
      desc: "5.5 screen",
      inStock: 10,
      productNameColor: "pink",
      country: "Australia"
    },
    {
      id: 1002,
      name: "Redmi",
      desc: "5 screen",
      inStock: 0,
      country: "India"
    },
    {
      id: 1003,
      name: "Oppo",
      desc: "6 screen",
      inStock: 20,
      country: "Germany"
    },
    {
      id: 1004,
      name: "Realme",
      desc: "6 screen",
      inStock: 20,
      country: ""
    }
  ];
}
