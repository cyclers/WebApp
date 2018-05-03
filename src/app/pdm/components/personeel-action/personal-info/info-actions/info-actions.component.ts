import { Component, OnInit, Input } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Actions } from '../../../maintain/infopages/actions/actions.component';
import * as _ from 'lodash'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-info-actions',
  templateUrl: './info-actions.component.html',
  styleUrls: ['./info-actions.component.css']
})
export class InfoActionsComponent implements OnInit {
  newHireReasons = []
  SeparationsReasons = []
  ReassignmentReasons = [] 
  RoleChangeReasons = [] 
  SalaryChangeReasons = []
  EmploymentChangeReasons = [] 
  TimeChangeReasons = []
  ReasonsforTermination = []

  all:any[];

actionForm: FormGroup; 
infoAction:any={};
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
url:any = "";

 
  constructor(private fb: FormBuilder,private pdmservice : PdmService, private http :HttpClient ) { 

 
  }

 
  ngOnInit() {
    this.createForm();
    this.pdmservice.getInfoPersonal(this.idCode + '/address').subscribe(data => {
     
      this.infoAction =_.first(data)
      this.url = this.infoAction.imageUrl
      console.log("woo" +this.url )
    })

   this.pdmservice.getResons().subscribe(
       data =>{
       this.all = data
       this.newHireReasons = this.all[0]["newHireReasons"] 
       this.SeparationsReasons = this.all[0]["SeparationsReasons"]
       this.ReassignmentReasons = this.all[0]["ReassignmentReasons"]
       this.RoleChangeReasons = this.all[0]["RoleChangeReasons"]
       this.SalaryChangeReasons = this.all[0]["SalaryChangeReasons"]
       this.EmploymentChangeReasons = this.all[0]["EmploymentChangeReasons"]
       this.TimeChangeReasons = this.all[0]["TimeChangeReasons"]
       this.ReasonsforTermination = this.all[0]["ReasonsforTermination"]
      }
     )   
     
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
  createForm(){
    this.actionForm =this.fb.group({
      ActionType: [this.selectedA ,[Validators.required]],
      SeparationsReason:"",                                      
      ReassignmentReason:'',
      RoleChangeReason: '',
      SalaryChangeReason: '',
        EmploymentChangeReason: '',
        TimeChangeReason: '',
        ReasonforTermination: '',
        EmploymentStatus :[this.url],
        newHireReason: ''
    });
    
  }
  postData(formvalue ,idCode ){
     let ggg = JSON.stringify(formvalue)
     console.log("formvalue" + ggg +"idCode" , idCode)
  this.pdmservice.postActions( idCode +"/action" , formvalue  ).subscribe(
      data => {
        let ggg = JSON.stringify(data)
        console.log("gggggg"+ggg) } )
  }

  deleteData(idCode){
    console.log("id",idCode)
    this.http.delete("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/"+idCode)
    .subscribe(data => console.log(data))
    
  }

 
  editData(value, idCode ){
    // let ggg = JSON.stringify(value)
//  console.log("value" ,ggg ,"idcode", idCode)
   this.pdmservice.editAction(value, idCode).subscribe()
  }
  onSu(formvalue){
    let ggg = JSON.stringify(formvalue)
    console.log("form value"+ggg)
 
}
}

















interface Action {
  id: any
  StaffId: any
  ActionType: any
  ActionReason: any
  TerminationReason:any
  EmploymentStatus: any
  ActionCode: any,
  CreatedAt: any
  ValidFrom: any
  ValidTo: any
  isActive: any
  isDeleted: any
  LastChange: any
  By: any
  name:any
  imageUrl: any,
  newHireReasons:any[],
  SeparationsReasons:any[],
  ReassignmentReasons:any[],
  RoleChangeReasons:any[],
  SalaryChangeReasons:any[],
  EmploymentChangeReasons:any[],
  TimeChangeReasons:any[],
  ReasonsforTermination:any[]
}
