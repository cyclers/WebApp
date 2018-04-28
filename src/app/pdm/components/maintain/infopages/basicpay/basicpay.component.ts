import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-basicpay',
  templateUrl: './basicpay.component.html',
  styles: []
})
export class BasicpayComponent implements OnInit {
  BasicPay: BasicPay

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageBasicPay(id) {
    this.pdmService.loadStaffRecord(id + '/BasicPay/')
      .subscribe(data => this.BasicPay = _.last(data))
  }
}
  
interface BasicPay {
  "id": any
  "StaffId": any
  "Reason": any
  "Grade": any
  "PayPeriod": any
  "MonthlySalary": any
  "Amount": any
  "Currency": any
}
