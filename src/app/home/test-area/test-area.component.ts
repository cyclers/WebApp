import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { PdmService } from '../../services/pdm.service';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent implements OnInit {

  constructor(private pdmservice: PdmService) { }
  apidata 
  title = "app";

  ngOnInit() {
    this.pdmservice.loadTarekData().subscribe(data => 
      {
        // console.log(data.rows)
        // this.apidata = data.rows
      })

    $(document).ready(function() {
      $("button").click(function() {
        var div = $("p");
        div.animate({ left: "100px" }, "slow");
        div.animate({ fontSize: "5em" }, "slow");
      });
    });
  }


}
