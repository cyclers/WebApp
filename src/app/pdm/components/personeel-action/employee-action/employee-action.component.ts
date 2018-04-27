import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-employee-action',
  templateUrl: './employee-action.component.html',
  styleUrls: ['./employee-action.component.css']
})
export class EmployeeActionComponent implements OnInit {
 employeeAction = [	"New Hire","Rehire","Separation"
  ,"Reassignment"
  ,"Role Change"
  ,"Salary Change"
  ,"Employment Change"
  ,"Time Change"
  ,"Leave of Absence"
  ,"Return of Leave"
  ,"Change Entry/Exit Date"
  ]

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




  
  isDisabeld = false;
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  EffectiveDate : NgbDateStruct ;
  actionType:string="";
  employeecode:any;
  ngOnInit() {
    
  }
 
   goToPersoneelPage(url:any){     //      { id: heroId, foo: 'foo' }
    this.router.navigate(['/personeel/employee-action/personeel-acton', url], { queryParams:{id: this.employeecode, effectd: this.EffectiveDate.value}, queryParamsHandling: "merge" });
  }

  selected(action:string ){
   this. actionType = action

    if(this.actionType === "New Hire"){
      this.isDisabeld = true
    }else{
      this.isDisabeld= false
    }
  
  }

  getCode(code:number){
    this.employeecode = code;
  }
}
