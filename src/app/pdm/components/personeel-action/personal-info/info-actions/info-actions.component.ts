import { Component, OnInit, Input } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Actions } from '../../../maintain/infopages/actions/actions.component';
import * as _ from 'lodash'
@Component({
  selector: 'app-info-actions',
  templateUrl: './info-actions.component.html',
  styleUrls: ['./info-actions.component.css']
})
export class InfoActionsComponent implements OnInit {
  newHireReasons = ["New Position"," Replacement"," New Project"]
  SeparationsReasons = ["Resignation  ","  Dismissal  ","  Retirement"]
  ReassignmentReasons = ["Promotion"," Demotion", " Internal Transfer "] 
  RoleChangeReasons = ["Job Title Change"," Job Grade Change "] 
  SalaryChangeReasons = ["Merit"," Inflation"," Adjustment"," Annual","Special"," Decrease"]
  EmploymentChangeReasons = ["Permanent"," Annual"," Definite"," Project"] 
  TimeChangeReasons = ["Permanent FT"," Permanent PT "]
  ReasonsforTermination = ["Intercompany Transfer ","Inv – End of Contract","Inv – End of Project/Assignment",
"Inv – Health","Inv – Performance","Inv – Retrenched","Inv – Retirement","Inv – Terminated",
"Inv – Transferred","V -  Management / Supervisor","V – Better Job Offer","V – Career Development / Advancement",
"V – Family","V – Health","V – Nature of the Job","V – Others","V – Personal Reason",
"V – Relocation","V – Rewards & Recognition","V – Work Environment","V – Work Life Balance"]



infoAction:any;
@Input() idCode :any;
@Input() selectedA :any;
newHire:boolean = false;
  Rehire:boolean= false;
  Separation:boolean= false;
  Reassignment:boolean= false;
  RoleChange:boolean= false;
  SalaryChange:boolean= false;
  EmploymentChange:boolean= false;
  TimeChange:boolean= false;
 
  constructor(private pdmservice : PdmService) { }

  ngOnInit() {
    this.pdmservice.getInfoPersonal(this.idCode + '/address').subscribe(data => {
      this.infoAction =_.first(data)
    })

 switch(this.selectedA){
     case "New Hire" : this.newHire = true
     break;
     case "Rehire" : this.Rehire = true
     break;
     case "Separation" : this.Separation= true
     break;
     case "Reassignment" : this.Reassignment= true
     break;
     case "Role Change" : this.RoleChange= true
     break;
     case "Salary Change" : this.SalaryChange= true
     break;
     case "Employment Change" : this.EmploymentChange= true
     break;
     case "Time Change" : this.TimeChange= true
   
 }
  }
  
 
}
interface Action {
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
  "name":any
  
}
