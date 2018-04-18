import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-orgassign',
  templateUrl: './orgassign.component.html',
  styles: []
})
export class OrgassignComponent implements OnInit {

  OrgAssign

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageOrgAssign(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.OrgAssign = data
        console.log(data)
      })
  }
}
