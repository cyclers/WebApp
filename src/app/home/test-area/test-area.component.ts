import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent implements OnInit {

  constructor() { }

  title = "app";

  ngOnInit() {
    $(document).ready(function() {
      $("button").click(function() {
        var div = $("p");
        div.animate({ left: "100px" }, "slow");
        div.animate({ fontSize: "5em" }, "slow");
      });
    });
  }


}
