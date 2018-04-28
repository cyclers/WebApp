import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-datemilestones',
  templateUrl: './datemilestones.component.html',
  styles: []
})
export class DatemilestonesComponent implements OnInit {

  DateMilestones

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageDateMilestones(id) {
    this.pdmService.loadStaffRecord(id + '/DateMilestones/')
      .subscribe(data => this.DateMilestones = _.last(data))
  }
}


