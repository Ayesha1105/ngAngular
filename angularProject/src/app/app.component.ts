import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Project";
  name = ["Suzi", "Dollar"];

  movies = [
    {
      id: 1,
      screen: 4
    },
    {
      id: 2,
      screen: 2
    },
    {
      id: 3,
      screen: 5
    }
  ];
}
