import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="section teal darken-2 white-text center">
      <p class="flow-text">Animal Shelter &copy; 2020</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
