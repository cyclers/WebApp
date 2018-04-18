import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-allowances',
  templateUrl: './allowances.component.html',
  styles: []
})
export class AllowancesComponent implements OnInit {
  Allowances

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageAllowances(id){
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
    .subscribe(data => {this.Allowances = data
    console.log(data)
    })
    }
    
}
