import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  template: `
    <div class="section section-follow teal darken-2 white-text center">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h4>Follow Animal Shelter</h4>
            <p>Follow us on social media for latest updates</p>
            <a href="#" class="white-text">
              <i class="fab fa-facebook fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
