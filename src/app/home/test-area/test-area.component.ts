import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { PdmService } from '../../services/pdm.service';

@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styles: []
})
export class TestAreaComponent implements OnInit {

  constructor(private pdmservice: PdmService) { }
  apidata 
  title = "app ";
personal: any[]
staff
  ngOnInit() {
   this.pdmservice.getNew().subscribe(data => {
     this.personal = data
     this.staff = data[0]
     console.log("zzzzz", data[0])
  }
      );
  }

  // onChange(input){
   
  //   this.staff.name = input
  //   console.log("ddddddddddddddd", this.staff)
  //   this.pdmservice.putNew(this.staff)    
  // }


  onChange(){
   
    this.pdmservice.putNew(this.staff)   

}
takeName(name){
  this.pdmservice.postNew({name:name ,actionType:"wiii",date:"56789" })
}
}