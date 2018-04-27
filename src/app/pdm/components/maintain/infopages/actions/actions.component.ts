import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: []
})
export class ActionsComponent implements OnInit {

  constructor(private pdmService: PdmService) { }
  Actions: Actions[]
  Action: Actions
  newForm: boolean = false
  selectedVer: number = 0


  ngOnInit() {
  }

  loadInfoPageActions(id: number){
    
    this.pdmService.loadStaffRecord(id + '/Actions/')
    .subscribe(data => {
      this.Action = _.last(data)
      this.Actions = _.cloneDeep(data)
      this.selectedVer = this.Actions.length -1
    })
    }
    
    
  NewForm(){
    this.newForm = true
    this.Action.ActionType = "",
    this.Action.ActionReason = "",
    this.Action.TerminationReason = "",
    this.Action.EmploymentStatus = "",
    this.Action.ActionCode = ""
    this.Action.ValidFrom = ""
    this.Action.ValidTo = ""

  }

  onSave(){
    switch (this.newForm){
      case false:
        console.log("1111111111111",this.Action)
        this.pdmService.putPersonnelChange(this.Action.StaffId + '/Actions/' + this.Action.id, this.Action)
        break;

      case true:
        console.log("222222222222",this.Action)
        this.pdmService.postNewPersonnelAction(this.Action.StaffId + '/Actions', this.Action)
        this.ngOnInit()
        break;

    }
    
  }

  viewVersion(ver: number){
    this.Action = this.Actions[ver]
  }

  backWard(){
    debugger
    if(this.selectedVer > 0){
      this.selectedVer = this.selectedVer -1
      this.Action = this.Actions[this.selectedVer]
    }
  }

  forWard(){
    debugger
    let max = this.Actions.length -1
    console.log("ssssssssss", max)
    console.log(this.selectedVer)
    if(this.selectedVer < max){
      this.selectedVer = this.selectedVer +1
      this.Action = this.Actions[this.selectedVer]
    }
  }

}

export interface Actions {
  "id": any
  "StaffId": any
  "ActionType": any
  "ActionReason": any
  "TerminationReason":any
  "EmploymentStatus": any
  "ActionCode": any,
  "CreatedAt": any
  "ValidFrom": any
  "ValidTo": any
  "isActive": any
  "isDeleted": any
  "LastChange": any
  "By": any
  

}
