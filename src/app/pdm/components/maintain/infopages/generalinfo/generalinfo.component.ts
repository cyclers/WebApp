import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styles: []
})
export class GeneralinfoComponent implements OnInit {

  GeneralInfo: General

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageGeneralInfo(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/General/' + id)
      .subscribe(data => this.GeneralInfo = data)
  }
}

export interface General {

  "id": any
  
  "CreationDate":any
  
}
