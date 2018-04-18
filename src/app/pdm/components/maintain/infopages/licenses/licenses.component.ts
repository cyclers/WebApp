import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styles: []
})
export class LicensesComponent implements OnInit {

  Licenses

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageLicenses(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.Licenses = data
        console.log(data)
      })
  }
}
