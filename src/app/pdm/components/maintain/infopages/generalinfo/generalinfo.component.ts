import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash'

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
    this.pdmService.loadStaffRecord(id + '/General/')
      .subscribe(data => this.GeneralInfo = _.last(data))
  }

}


export interface General {

  "id": any
  "StaffId": any
  "createdAt":any
  "name": any
  "imageUrl": any
}
