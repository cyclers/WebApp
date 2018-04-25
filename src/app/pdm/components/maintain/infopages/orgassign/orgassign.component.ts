import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-orgassign',
  templateUrl: './orgassign.component.html',
  styles: []
})
export class OrgassignComponent implements OnInit {

  OrgAssign: OrgAssign

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageOrgAssign(id) {
    this.pdmService.loadStaffRecord('OrgAssign/' + id)
      .subscribe(data => this.OrgAssign = data)
  }
}

interface OrgAssign {
  "EmpId": any
  "StaffId": any
  "CompanyCode":any
  "BU": any
  "Division": any
  "Department": any
  "Title": any
  "PersonnelArea": any
  "PersonnelSubArea": any
  "CostCenter": any
  "EmployeeGroup":any,
  "EmployeeSubGroup": any
  "PayArea": any
  "JobFamily": any
  "JobSubFamily": any
  "PositionCode": any
  "OrgUnit": any
  "ManagerID": any
}