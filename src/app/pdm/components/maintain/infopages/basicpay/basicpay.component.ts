import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-basicpay',
  templateUrl: './basicpay.component.html',
  styles: []
})
export class BasicpayComponent implements OnInit {
  BasicPay

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageBasicPay(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.BasicPay = data
        console.log(data)
      })
  }
}
  
}
