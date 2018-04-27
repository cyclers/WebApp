import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-workschedule',
  templateUrl: './workschedule.component.html',
  styles: []
})
export class WorkscheduleComponent implements OnInit {

  workSchedules :WorkSchedules

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPageWorkSchedules(id) {
    this.pdmService.loadStaffRecord(id + '/WorkSchedule/')
      .subscribe(data => this.workSchedules = _.last(data))
  }
}
 interface WorkSchedules { 
  "WorkScheduleRule": any
  "PartTimeEmployee": any
  "WeeklyWorkingHrs":any
  "MonthlyWorkingHrs": any
  "isShiftbased": any
  
 }