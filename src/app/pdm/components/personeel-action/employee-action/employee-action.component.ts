import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { data } from '../../../../services/pdm.service';
@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.css']
})
export class EmployeeActionComponent implements OnInit {


  employeeAction2=[
    {url:"New Hire", actionType: "New Hire"},
    {url:"Rehire", actionType: "Rehire"},
    {url:"Separation", actionType: "Separation"},
    {url:"Reassignment", actionType: "Reassignment"},
    {url:"Role Change", actionType: "Role Change"},
    {url:"Salary Change", actionType: "Salary Change"},
    {url:"Employment Change", actionType: "Employment Change"},
    {url:"Time Change", actionType: "Time Change"},
    {url:"Leave of Absence", actionType: "Leave of Absence"},
    {url:"Return of Leave", actionType: "Return of Leave"},
    {url:"Change Entry/Exit Date", actionType: "Change Entry/Exit Date"}
  ]

  nameinput:boolean = false;
  actionType:string="";
  employeeCode:any;
  EffectiveDate ;
  datalength:any=[];
  data2:number;
  name:any;
  
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }
 
  
  ngOnInit() {

    this.http.get<any>("http://5ae3691934b5970014d2ee0e.mockapi.io/personal")
    .subscribe(
      data => {
        this.datalength = data;
      this.data2 = this.datalength.length;
       console.log("data type " + this.datalength.length)
      }
    )
  }
 
   goToPersoneelPage(){    
    this.router.navigate(['/personnel/employee-action/personnel-acton'],
     { queryParams:{id: this.employeeCode,
       effectd: this.EffectiveDate,
        actiontype :this.actionType,
        name : this.name
      },
      queryParamsHandling: "merge" });
  }

  selected(action:string ){
   this. actionType = action

    if(this.actionType === "New Hire"){
      
      this.employeeCode = this.data2 + 1
      this.nameinput = true;
     
    }else{
      this.nameinput = false
      this.employeeCode = this.employeeCode
    }
  
  }
  createNewEmpolyee(){
    console.log("esc" + this.employeeCode)
    this.http.post("http://5ae3691934b5970014d2ee0e.mockapi.io/personal/",{
      id:this.employeeCode,
      name: this.name
    }).subscribe()
  }
  
}
