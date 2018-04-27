import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { NgModel } from '@angular/forms'
import * as _ from 'lodash'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: []
})
export class AddressComponent implements OnInit {

  constructor(private pdmService: PdmService) { }
  Addresss: Address[]
  Address: Address
  newForm: boolean = false
  selectedVer: number = 0


  ngOnInit() {
  }

  loadInfoPageAddresss(id: number){
    
    this.pdmService.loadStaffRecord(id + '/Addresss/')
    .subscribe(data => {
      this.Address = _.last(data)
      this.Addresss = _.cloneDeep(data)
      this.selectedVer = this.Addresss.length -1
    })
    }
    
    
  NewForm(){
    this.newForm = true
    this.Address.PostalCode=  "",
    this.Address.City=  "",
    this.Address.Country=  "",
    this.Address.PrivateEmail=  "",
    this.Address.BusinessEmail=  "",
    this.Address.PrivateCell=  "",
    this.Address.EmergencyName1=  "",
    this.Address.Relationship1=  "",
    this.Address.Phone1=  "",
    this.Address.EmergencyName2=  "",
    this.Address.Relationship2=  "",
    this.Address.Phone2=  "",
    this.Address.CreatedAt=  "",
    this.Address.ValidFrom=  "",
    this.Address.ValidTo=  "",
    this.Address.isActive=  "",
    this.Address.isDeleted=  "",
    this.Address.LastChange=  "",
    this.Address.By=  ""  

  }

  onSave(){
    switch (this.newForm){
      case false:
        console.log("1111111111111",this.Address)
        this.pdmService.putPersonnelChange(this.Address.StaffId + '/Addresss/' + this.Address.id, this.Address)
        break;

      case true:
        console.log("222222222222",this.Address)
        this.pdmService.postNewPersonnelAction(this.Address.StaffId + '/Addresss', this.Address)
        this.ngOnInit()
        break;

    }
    
  }

  viewVersion(ver: number){
    this.Address = this.Addresss[ver]
  }

  backWard(){
    debugger
    if(this.selectedVer > 0){
      this.selectedVer = this.selectedVer -1
      this.Address = this.Addresss[this.selectedVer]
    }
  }

  forWard(){
    debugger
    let max = this.Addresss.length -1
    console.log("ssssssssss", max)
    console.log(this.selectedVer)
    if(this.selectedVer < max){
      this.selectedVer = this.selectedVer +1
      this.Address = this.Addresss[this.selectedVer]
    }
  }

}

export interface Address {
  id: any
  StaffId: any
  Address1: any
  Address2: any
  PostalCode: any
  City: any
  Country: any
  PrivateEmail: any
  BusinessEmail: any
  PrivateCell: any
  EmergencyName1: any
  Relationship1: any
  Phone1: any
  EmergencyName2: any
  Relationship2: any
  Phone2: any
  CreatedAt: any
  ValidFrom: any
  ValidTo: any
  isActive: any
  isDeleted: any
  LastChange: any
  By: any

  
}
