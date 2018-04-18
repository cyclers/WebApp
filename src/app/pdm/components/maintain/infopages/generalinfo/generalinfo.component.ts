import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styles: []
})
export class GeneralinfoComponent implements OnInit {

  GeneralInfo

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageGeneralInfo(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.GeneralInfo = data
        console.log(data)
      })
  }
}
