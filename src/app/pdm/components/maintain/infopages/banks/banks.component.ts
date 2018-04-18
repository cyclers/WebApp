import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styles: []
})
export class BanksComponent implements OnInit {
  Banks

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageBanks(id){
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
    .subscribe(data => {this.Banks = data
    console.log(data)
    })
    }
    
}
