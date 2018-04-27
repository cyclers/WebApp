import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: []
})
export class ActionsComponent implements OnInit {

  constructor(private pdmService: PdmService) { }
  Actions: Actions
  newForm: boolean = false


  ngOnInit() {
  }

  loadInfoPageActions(id: number){
    this.pdmService.loadStaffRecord('Actions/' + id)
    .subscribe(data => this.Actions = data)
    }
    
    
  NewForm(){
    this.newForm = true
    this.Actions.ActionType = "",
    this.Actions.ActionReason = "",
    this.Actions.TerminationReason = "",
    this.Actions.EmploymentStatus = "",
    this.Actions.ActionCode = ""
    this.Actions.ValidFrom = ""
    this.Actions.ValidTo = ""
  }

  onSave(){
    switch (this.newForm){
      case false:
        console.log("1111111111111",this.Actions)
        this.pdmService.putPersonnelChange('/Actions/' + this.Actions.id, this.Actions)
        break;

      case true:
        console.log("222222222222",this.Actions)
        this.pdmService.postNewPersonnelAction('/Actions/', this.Actions)
        break;

    }
  }

}

export interface Actions {
  "id": any
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
