import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-workschedule',
  templateUrl: './workschedule.component.html',
  styles: []
})
export class WorkscheduleComponent implements OnInit {

  WorkSchedules

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageWorkSchedules(id) {
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
      .subscribe(data => this.WorkSchedules = data)
  }
}
