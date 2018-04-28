import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styles: []
})
export class PreviousComponent implements OnInit {

  PreviousEmployers: Employer

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPagePreviousEmployers(id) {
    this.pdmService.loadStaffRecord(id + '/PreviousEmployers/')
      .subscribe(data => this.PreviousEmployers = _.last(data))
  }
}

interface Employer {
  "EmpID": any
  "StaffId": any
  "Employer": any
  "StartDate": any
  "EndDate": any
  "Country": any
  "JobTitle": any
}