import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styles: []
})
export class GeneralinfoComponent implements OnInit {

  GeneralInfo: General

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageGeneralInfo(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/General/' + id)
      .subscribe(data => this.GeneralInfo = data)
  }

  postData(){
    const data: General = {
      "id": "51",
      "StaffId": "77",
      "createdAt": "1524092767",
      "name": "Khaled Jamal",
      "imageUrl": "Khaled Jamal"
    }
    this.pdmService.postNewPersonnelAction(data)
  }
}

export interface General {

  "id": any
  
  "CreationDate":any
  
}
