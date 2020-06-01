import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  template: `
    <section class="slider">
      <ul class="slides">
        <li>
          <img src="../assets/img/pet5.jpg" style="height: 500px;" />
          <!-- random image -->
          <div class="caption center-align black-text" style="margin-top: 15%;">
            <h3>Pet is all of Love</h3>
          </div>
        </li>
        <li>
          <img src="../assets/img/pet2.jpg" />
          <!-- random image -->
          <div class="caption left-align" style="margin-top: 25%;">
            <h3>Find out Your Companion on Animal Shelter</h3>
          </div>
        </li>
        <li>
          <img src="../assets/img/pet9.jpg" />
          <!-- random image -->
          <div class="caption right-align black-text" style="margin-top: 25%;">
            <h3>Let's Play Again, Adopt them</h3>
          </div>
        </li>
      </ul>
    </section>
  `,
  styles: []
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
