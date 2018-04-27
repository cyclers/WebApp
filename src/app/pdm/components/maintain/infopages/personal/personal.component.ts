import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styles: []
})
export class PersonalComponent implements OnInit {
  
  constructor(private pdmService: PdmService) { }

  Personals: Personal[]
  Personal: Personal
  newForm: boolean = false
  selectedVer: number = 0


  ngOnInit() {
  }

  loadInfoPagePersonal(id: number){
    
    this.pdmService.loadStaffRecord(id + '/Personal/')
    .subscribe(data => {
      this.Personal = _.last(data)
      this.Personals = _.cloneDeep(data)
      this.selectedVer = this.Personals.length -1
    })
    }
    
    
  NewForm(){
    this.newForm = true
    this.Personal.id=  "",
    this.Personal.StaffId=  "",
    this.Personal.FormofAddress=  "",
    this.Personal.FirstName=  "",
    this.Personal.LastName=  "",
    this.Personal.ArabicFullName=  "",
    this.Personal.Gender=  "",
    this.Personal.DateofBirth=  "",
    this.Personal.CountryofBirth=  "",
    this.Personal.Nationality=  "",
    this.Personal.MaritalStatus=  "",
    this.Personal.MilitaryStatus=  "",
    this.Personal.NationalID=  "",
    this.Personal.Disabled=  "",
    this.Personal.Typeofdisability=  "",
    this.Personal.CreatedAt=  "",
    this.Personal.ValidFrom=  "",
    this.Personal.ValidTo=  "",
    this.Personal.isActive=  "",
    this.Personal.isDeleted=  "",
    this.Personal.LastChange=  "",
    this.Personal.By=  ""
    }

  onSave(){
    switch (this.newForm){
      case false:
        this.pdmService.putPersonnelChange(this.Personal.StaffId + '/Personal/' + this.Personal.id, this.Personal)
        break;

      case true:
        this.pdmService.postNewPersonnelAction(this.Personal.StaffId + '/Personal', this.Personal)
        this.ngOnInit()
        break;

    }
    
  }

  viewVersion(ver: number){
    this.Personal = this.Personal[ver]
  }

  backWard(){
    debugger
    if(this.selectedVer > 0){
      this.selectedVer = this.selectedVer -1
      this.Personal = this.Personal[this.selectedVer]
    }
  }

  forWard(){
    debugger
    let max = this.Personals.length -1
    console.log(this.selectedVer)
    if(this.selectedVer < max){
      this.selectedVer = this.selectedVer +1
      this.Personal = this.Personal[this.selectedVer]
    }
  }

}


interface Personal {
  id: any
  StaffId: any
  FormofAddress: any
  FirstName: any
  LastName: any
  ArabicFullName: any
  Gender: any
  DateofBirth: any
  CountryofBirth: any
  Nationality: any
  MaritalStatus: any
  MilitaryStatus: any
  NationalID: any
  Disabled: any
  Typeofdisability: any
  CreatedAt: any
  ValidFrom: any
  ValidTo: any
  isActive: any
  isDeleted: any
  LastChange: any
  By: any


}
