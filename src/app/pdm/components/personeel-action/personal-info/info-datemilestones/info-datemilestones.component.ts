import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
@Component({
  selector: 'app-info-datemilestones',
  templateUrl: './info-datemilestones.component.html',
  styleUrls: ['./info-datemilestones.component.css']
})
export class InfoDatemilestonesComponent implements OnInit {

  myfirst = ["Hiring Date","Affiliation date","Seniority date","Exit Date","Eos Date","Retirement Date"]
  constructor() { }
  mysecond:any[];
  mythird:any[];
  myforth:any[];
  myfifth:any[];
  mysixth:any[];
  ngOnInit() {
  }
  onChange(val){
    let hjh = this.myfirst.indexOf(val)
    console.log(hjh)
    this.mysecond = _.without(this.myfirst,val)
    console.log(this.mysecond)
  }
  onChange2(val2){
    console.log(val2)
    this.mythird = _.without(this.mysecond,val2)
    console.log(this.mythird)
  }
  onChange3(val3){
    console.log(val3)
    this.myforth = _.without(this.mythird,val3)
  }
  onChange4(val4){
    console.log(val4)
    this.myfifth = _.without(this.myforth,val4)
  }
  onChange5(val5){
    console.log(val5)
    this.mysixth = _.without(this.myfifth,val5)
  }
  onChange6(val6){
    console.log(val6)
   
  }
}
