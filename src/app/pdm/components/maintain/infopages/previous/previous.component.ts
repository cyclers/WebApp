import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

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
    this.pdmService.loadStaffRecord('PreviousEmployers/' + id)
      .subscribe(data => this.PreviousEmployers = data)
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