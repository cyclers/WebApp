import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeActionComponent } from '../employee-action/employee-action.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
//declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-personeel-action',
  templateUrl: './personeel-action.component.html',
  styleUrls: ['./personeel-action.component.css']
})
export class PersoneelActionComponent implements OnInit {

  @ViewChild(EmployeeActionComponent) private thePersoneelDate:number 
  constructor() { }
 pd:number;
  
  not = false;
  selectedAction:any = "Time Change";
  newHire:boolean = false;
  Rehire:boolean= false;
  Separation:boolean= false;
  Reassignment:boolean= false;
  RoleChange:boolean= false;
  SalaryChange:boolean= false;
  EmploymentChange:boolean= false;
  TimeChange:boolean= false;
  LeaveofAbsence:boolean= false;
  ReturnofLeave:boolean= false;
  ChangeEntryExitDate:boolean= true;
  ngOnInit() {
   
    switch(this.selectedAction){
      case "New Hire" : this.newHire= true
      break;
      case "Rehire" : this.Rehire= true
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
      break;
      case "Leave of Absence" : this.LeaveofAbsence= true
      break;
      case "Return of Leave" : this.ReturnofLeave= true
      break;
      case "Change Entry/Exit Date" : this.ChangeEntryExitDate= false
      break;
      default:this.ChangeEntryExitDate= false
    }
 

  }


    excute(){
  this.pd = this.thePersoneelDate
    }
}


