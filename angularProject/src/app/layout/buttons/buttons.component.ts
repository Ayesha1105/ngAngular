import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  template: `
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large black">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a class="btn-floating red"
            ><i class="material-icons">insert_chart</i></a
          >
        </li>
        <li>
          <a class="btn-floating yellow darken-1"
            ><i class="material-icons">format_quote</i></a
          >
        </li>
        <li>
          <a class="btn-floating green"
            ><i class="material-icons">publish</i></a
          >
        </li>
        <li>
          <a class="btn-floating blue"
            ><i class="material-icons">attach_file</i></a
          >
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
