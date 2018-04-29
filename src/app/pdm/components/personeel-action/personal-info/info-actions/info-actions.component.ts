import { Component, OnInit, Input } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { Actions } from '../../../maintain/infopages/actions/actions.component';
import * as _ from 'lodash'
@Component({
  selector: 'app-info-actions',
  templateUrl: './info-actions.component.html',
  styleUrls: ['./info-actions.component.css']
})
export class InfoActionsComponent implements OnInit {
infoAction:any;
@Input() idCode :any;

  constructor(private pdmservice : PdmService) { }

  ngOnInit() {
    this.pdmservice.getInfoPersonal(this.idCode + '/address').subscribe(data => {
      this.infoAction =_.first(data)
    })


  }


 
}
interface Action {
  "id": any
  "StaffId": any
  "ActionType": any
  "ActionReason": any
  "TerminationReason":any
  "EmploymentStatus": any
  "ActionCode": any,
  "CreatedAt": any
  "ValidFrom": any
  "ValidTo": any
  "isActive": any
  "isDeleted": any
  "LastChange": any
  "By": any
  "name":any
  
}
