import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-laborcontract',
  templateUrl: './laborcontract.component.html',
  styles: []
})
export class LaborcontractComponent implements OnInit {

  LaborContract

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageLaborContract(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => this.LaborContract = data)
  }
}
