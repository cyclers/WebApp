import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styles: []
})
export class ImmigrationComponent implements OnInit {

  immigration :Immigration

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageImmigration(id) {
    this.pdmService.loadStaffRecord('Immigration/' + id)
      .subscribe(data => this.immigration = data)
  }
}


interface Immigration {
  "NameInPassport": any
  "PassportNo": any
  "PassportCounty": any
  "PassportIssuePlace": any
  "PassportExpirationDate":any
  "VisaNo": any
  "Designation": any
  "DurationinYrs":any
  "ResidencePermitNo": any
  "Sponsor": any
}