import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styles: []
})
export class FamilyComponent implements OnInit {

  Family: Family

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageFamily(id) {
    this.pdmService.loadStaffRecord('Family/' + id)
      .subscribe(data => this.Family = data)
  }
}

export interface Family {
  "EmpID": any
  "StaffId": any
  "MemberName": any
  "Relationship": any
}

