import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section id="contact" class="section section-contact scrollspy">
      <div class="container">
        <div class="row">
          <div class="col s12 m6">
            <div class="card-panel teal white-text center">
              <i class="material-icons">email</i>
              <h5>Contact Us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                fugit iste repudiandae ipsa, perspiciatis corrupti sapiente quae
                esse necessitatibus nulla.
              </p>
            </div>
            <ul class="collection with-header">
              <li class="collection-header">
                <h4>Location <i class="material-icons">location_on</i></h4>
              </li>
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d121091.40503196158!2d73.75961293324866!3d18.478838730767137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.476062799999998!2d73.8987064!4m5!1s0x3bc2be1388afeb53%3A0xb67ad55c0f9115cc!2spet%20adoption%20pune!3m2!1d18.4952394!2d73.7651209!5e0!3m2!1sen!2sin!4v1583827670128!5m2!1sen!2sin"
                  width="500"
                  height="250"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                ></iframe>
              </li>
              <li class="collection-item">India, Maharashtra, Pune 411001</li>
            </ul>
          </div>
          <div class="col s12 m6">
            <div class="card-panel grey lighten-3">
              <h5>Please fill this form</h5>
              <div class="input-field">
                <input type="text" placeholder="Name" />
              </div>
              <div class="input-field">
                <input type="text" placeholder="Email" />
              </div>
              <div class="input-field">
                <input type="text" placeholder="Phone" />
              </div>
              <div class="input-field">
                <textarea
                  class="materialize-textarea"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="submit"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
