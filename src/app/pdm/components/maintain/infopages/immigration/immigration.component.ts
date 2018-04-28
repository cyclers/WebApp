import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

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
    this.pdmService.loadStaffRecord(id + '/Immigration/')
      .subscribe(data => this.immigration = _.last(data))
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