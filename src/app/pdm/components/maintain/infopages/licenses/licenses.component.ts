import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styles: []
})
export class LicensesComponent implements OnInit {

  licenses : Licenses

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageLicenses(id) {
    this.pdmService.loadStaffRecord(id + '/Licenses/')
      .subscribe(data => this.licenses = _.last(data))
  }
}
  export interface Licenses {
    "id": any
    "StaffId": any
    "LicenseType": any
    "LicenseName":any
    "IssueDate": any
    "ExpirationDate": any
    "IssueInstitute": any
    "EntityCountry": any
  }