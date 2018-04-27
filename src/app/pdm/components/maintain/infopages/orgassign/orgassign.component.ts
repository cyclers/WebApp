import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-orgassign',
  templateUrl: './orgassign.component.html',
  styles: []
})
export class OrgassignComponent implements OnInit {

  constructor(private pdmService: PdmService) { }

  OrgAssigns: OrgAssign[]
  OrgAssign: OrgAssign
  newForm: boolean = false
  selectedVer: number = 0


  ngOnInit() {
  }

  loadInfoPageOrgAssign(id: number){
    
    this.pdmService.loadStaffRecord(id + '/OrgAssign/')
    .subscribe(data => {
      this.OrgAssign = _.last(data)
      this.OrgAssigns = _.cloneDeep(data)
      this.selectedVer = this.OrgAssigns.length -1
    })
    }
    
    
  NewForm(){
    this.newForm = true
    this.OrgAssign.id=  "",
    this.OrgAssign.StaffId=  "",
    this.OrgAssign.CompanyCode=  "",
    this.OrgAssign.BU=  "",
    this.OrgAssign.Division=  "",
    this.OrgAssign.Department=  "",
    this.OrgAssign.Title=  "",
    this.OrgAssign.PersonnelArea=  "",
    this.OrgAssign.PersonnelSubArea=  "",
    this.OrgAssign.CostCenter=  "",
    this.OrgAssign.EmployeeGroup=  "",
    this.OrgAssign.EmployeeSubGroup=  "",
    this.OrgAssign.PayArea=  "",
    this.OrgAssign.JobFamily=  "",
    this.OrgAssign.JobSubFamily=  "",
    this.OrgAssign.PositionCode=  "",
    this.OrgAssign.OrgUnit=  "",
    this.OrgAssign.ManagerID=  "",
    this.OrgAssign.CreatedAt=  "",
    this.OrgAssign.ValidFrom=  "",
    this.OrgAssign.ValidTo=  "",
    this.OrgAssign.isActive=  "",
    this.OrgAssign.isDeleted=  "",
    this.OrgAssign.LastChange=  "",
    this.OrgAssign.By=  ""
      }

  onSave(){
    switch (this.newForm){
      case false:
        this.pdmService.putPersonnelChange(this.OrgAssign.StaffId + '/OrgAssign/' + this.OrgAssign.id, this.OrgAssign)
        break;

      case true:
        this.pdmService.postNewPersonnelAction(this.OrgAssign.StaffId + '/OrgAssign', this.OrgAssign)
        this.ngOnInit()
        break;

    }
    
  }

  viewVersion(ver: number){
    this.OrgAssign = this.OrgAssign[ver]
  }

  backWard(){
    debugger
    if(this.selectedVer > 0){
      this.selectedVer = this.selectedVer -1
      this.OrgAssign = this.OrgAssign[this.selectedVer]
    }
  }

  forWard(){
    debugger
    let max = this.OrgAssigns.length -1
    console.log(this.selectedVer)
    if(this.selectedVer < max){
      this.selectedVer = this.selectedVer +1
      this.OrgAssign = this.OrgAssign[this.selectedVer]
    }
  }

}

interface OrgAssign {
  id: any
  StaffId: any
  CompanyCode: any
  BU: any
  Division: any
  Department: any
  Title: any
  PersonnelArea: any
  PersonnelSubArea: any
  CostCenter: any
  EmployeeGroup: any
  EmployeeSubGroup: any
  PayArea: any
  JobFamily: any
  JobSubFamily: any
  PositionCode: any
  OrgUnit: any
  ManagerID: any
  CreatedAt: any
  ValidFrom: any
  ValidTo: any
  isActive: any
  isDeleted: any
  LastChange: any
  By: any
  
}