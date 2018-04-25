import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

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
    this.pdmService.loadStaffRecord('Banks/' + id)
    .subscribe(data => this.Banks = data)
    
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
