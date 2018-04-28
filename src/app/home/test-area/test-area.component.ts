import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { PdmService } from '../../services/pdm.service';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent  {

  constructor(private pdmservice: PdmService) { }
   
}
