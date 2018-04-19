import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

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
    this.pdmService.loadStaffRecord('Staff/' +id + '/Licenses/' + id)
      .subscribe(data => this.licenses = data)
  }
}
  export interface Licenses {
    "LicenseType": any
    "LicenseName": any
    "IssueDate": any
    "ExpirationDate": any
      "IssueInstitute" : any
      "EntityCountry" : any
  }