import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeActionComponent } from '../employee-action/employee-action.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
//declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-personeel-action',
  templateUrl: './personeel-action.component.html',
  styleUrls: ['./personeel-action.component.css']
})
export class PersoneelActionComponent implements OnInit {

  @ViewChild(EmployeeActionComponent) private thePersoneelDate:number 
  constructor(private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }
  allValid : boolean = true;
  model;
 

  
  selectedAction:any = "";

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

  employeeCode;
  EffectiveDate;
  endDate = "9-9-9999";
  
  ngOnInit() {
    this.selectedAction = this.route.snapshot.paramMap.get('url');
    
    //Added by Khaled
    // this.route.queryParams.subscribe(param => {
    //   console.log("Returning --> ", param['id'], param['effectd'] )
   
    // })

    this.route.queryParams.subscribe(param => 
      {this.employeeCode = param["id"],
       this.EffectiveDate = param["effectd"] 
       })
    
    
     

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


  
    openDialog() {
      this.dialog.open(DialogComponent);
    }
  }



