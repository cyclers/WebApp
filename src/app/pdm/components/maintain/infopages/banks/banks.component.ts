import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styles: []
})
export class BanksComponent implements OnInit {
  Banks:Bank

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageBanks(id){
    this.pdmService.loadStaffRecord(id + '/Banks/')
    .subscribe(data => this.Banks = _.last(data))
    
    }
    
}

interface Bank {
  "EmpID": any
  "StaffId": any
  "BankCountry": any
  "BranchName": any
  "BranchCode": any
  "BankKey": any
  "AccountNo": any
  "Currency": any
}
