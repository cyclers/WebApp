import { Component } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  public ngOnInit() {
    $(document).ready(function() {
      $("button").click(function() {
        var div = $("p");
        div.animate({ left: "100px" }, "slow");
        div.animate({ fontSize: "5em" }, "slow");
      });
    });
  }
}
