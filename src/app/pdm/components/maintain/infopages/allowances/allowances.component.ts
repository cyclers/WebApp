import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-allowances',
  templateUrl: './allowances.component.html',
  styles: []
})
export class AllowancesComponent implements OnInit {
  Allowances: Allowance

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageAllowances(id){
    this.pdmService.loadStaffRecord('Allowances/' + id)
    .subscribe(data => this.Allowances = data)
    }
    
}

interface Allowance {
  "id": any
  "StaffId": any
  "WageType": any
  "Amount": any
  "Currency": any
}
