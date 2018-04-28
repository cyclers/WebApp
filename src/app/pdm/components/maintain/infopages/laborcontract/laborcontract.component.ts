import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-laborcontract',
  templateUrl: './laborcontract.component.html',
  styles: []
})
export class LaborcontractComponent implements OnInit {

  laborContract : LaborContract

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageLaborContract(id) {
    this.pdmService.loadStaffRecord(id + '/LaborContract/')
      .subscribe(data => this.laborContract = _.last(data))
  }
}


export interface LaborContract{
  "EmpID": any
  "StaffId": any
  "CurrentContractType": any
  "EndDate": any
  "From": any
  "To": any
}