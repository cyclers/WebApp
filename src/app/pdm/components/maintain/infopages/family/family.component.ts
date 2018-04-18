import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styles: []
})
export class FamilyComponent implements OnInit {

  Family

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageFamily(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => {
      this.Family = data
        console.log(data)
      })
  }
}

