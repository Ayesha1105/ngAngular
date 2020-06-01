import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  template: `
    <section class="section grey lighten-4 center">
      <div class="container">
        <div class="row">
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="material-icons large teal-text">room</i>
              <h4>Book Appointment</h4>
              <input type="text" class="datepicker" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                corporis.
              </p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="material-icons large teal-text">store</i>
              <h4>Shop</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium possimus
              </p>
              <p>
                <label>
                  <input type="radio" checked />
                  <span>Collar</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="radio" />
                  <span>Food</span>
                </label>
              </p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="material-icons large teal-text">help</i>
              <h4>Any Help</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                corporis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
