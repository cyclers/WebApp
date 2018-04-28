import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { PdmService } from '../../services/pdm.service';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent implements OnInit {

  constructor(private pdmservice: PdmService) { }
  apidata 
  title = "app ";

  ngOnInit() {
    

  }


}


