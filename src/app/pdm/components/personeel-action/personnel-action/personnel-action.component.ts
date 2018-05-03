import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeActionComponent } from '../employee-action/employee-action.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { PdmService } from '../../../../services/pdm.service';
//declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-personnel-action',
  templateUrl: './personnel-action.component.html',
  styleUrls: []
})
export class PersonnelActionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private pdmservice : PdmService) { }
  allValid : boolean = false;

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

  employeeCode:any = "";
  EffectiveDate;
  endDate = "31-12-9999";
  employeeinfo :any= {} ;
  newEmployeeNmae: any;
  ngOnInit() {
    // this.selectedAction = this.route.snapshot.paramMap.get('url');

    this.route.queryParams.subscribe(param => 
      {this.employeeCode = param["id"],
       this.EffectiveDate = param["effectd"] ,
     this.selectedAction = param["actiontype"],
     this.newEmployeeNmae = param["name"]
       })
    
     this.pdmservice.getInfoPersonal(this.employeeCode)
    .subscribe(data => {
      this.employeeinfo = data["name"]
      let ggg = JSON.stringify( this.employeeinfo)
        console.log(" this.employeeinfo "+ ggg )
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



