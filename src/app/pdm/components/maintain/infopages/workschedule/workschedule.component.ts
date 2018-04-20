import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

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
    this.pdmService.loadStaffRecord('Staff/' +id + '/WorkSchedule/' + id)
      .subscribe(data => this.workSchedules = data)
  }
}
 export interface WorkSchedules { 
  "WorkScheduleRule": any
  "Part-TimeEmployee": any
  "WeeklyWorkingHrs":any
  "MonthlyWorkingHrs": any
  "Shift-based": any
  
 }