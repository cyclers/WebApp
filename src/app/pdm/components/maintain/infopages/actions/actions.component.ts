import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: []
})
export class ActionsComponent implements OnInit {
  ActionsForm: FormGroup;

  constructor(private fb: FormBuilder, private pdmService: PdmService) { 
    this.ActionsForm = this.fb.group({
      id: "", 
      ActionType: "",
      ActionReason: "",
      TerminationReason: "", 
      EmploymentStatus: "",
      ValidFrom: "",
      ValidTo: "",
    })
  }
  Actions: Actions //Observable<Actions>
  
  onSubmit(inputs){
    console.log(inputs)
    this.pdmService.postMaintainChange(inputs)
  }

  newForm(){
    this.ActionsForm.reset({

    })
  }

  loadForm(){
    
    this.ActionsForm.setValue({
      id: 51, // this.Actions.id,
      ActionType: this.Actions.EmploymentStatus,
      ActionReason: this.Actions.ActionReason,
      TerminationReason: this.Actions.TerminationReason,
      EmploymentStatus: this.Actions.EmploymentStatus,
      ValidFrom: this.Actions.ValidFrom,
      ValidTo: this.Actions.ValidTo
    })

  }
  ngOnInit() {
    
  }

  loadInfoPageActions(id: number){
    
    this.pdmService.loadStaffRecord('Actions/' + id)
    .subscribe(data =>  {
      this.Actions = data
      this.loadForm()
    })
    
        
    }
    
    
}

export interface Actions {
  "id": any
  "ActionType": any
  "ActionReason": any
  "TerminationReason":any
  "EmploymentStatus": any
  "ActionCode": any
  "CreatedAt": any
  "ValidFrom": any
  "ValidTo": any
  "isActive": any
  "isDeleted": any
  "LastChange": any
  "By": any

}
