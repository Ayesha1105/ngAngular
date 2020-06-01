import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-bar",
  template: `
    <section
      id="search"
      class="section section-search teal darken-1 white-text center scrollspy"
    >
      <div class="container">
        <div class="row">
          <div class="col s12">
            <h3>Search Pet</h3>
            <div class="input-field">
              <input
                type="text"
                class="white grey-text autocomplete"
                id="autocomplete-input"
                placeholder="Dog,Cat..etc"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
