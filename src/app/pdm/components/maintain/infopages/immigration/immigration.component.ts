import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styles: []
})
export class ImmigrationComponent implements OnInit {

  Immigration

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageImmigration(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.Immigration = data
        console.log(data)
      })
  }
}
