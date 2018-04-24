import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  poo:any="";
  isDisabeld = false;
  constructor() { }
  EffectiveDate : NgbDateStruct ;
  selectedAction:any="";
  isSpecial:any = false;
  ngOnInit() {
    
  }
 
  takeTheDate(doo:any){
   this.poo = doo;
  }


  selected(i:number){
    if( i === 0){
      this.isDisabeld = true
    }else{
      this.isDisabeld= false
    }
    this.selectedAction = this.employeeAction[i]
    this.isSpecial = true
  }


}
