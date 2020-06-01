import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  template: `
    <section id="gallery" class="section section-gallery scrollspy">
      <div class="container">
        <h4 class="center"><span class="teal-text">Photo</span> Gallery</h4>
        <div class="row">
          <div class="col s12 m3">
            <img
              src="../assets/img/pet7.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?labrador"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet5.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet7.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s12 m3">
            <img
              src="../assets/img/pet3.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet8.png"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet9.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet2.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?cat"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet4.png"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="../assets/img/pet5.jpg"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
          <div class="col s12 m3">
            <img
              src="https://source.unsplash.com/1600x900/?dogs"
              alt=""
              class="materialboxed responsive-img"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
