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
    this.pdmService.loadStaffRecord('WorkSchedule/' + id)
      .subscribe(data => this.workSchedules = data)
  }
}
 interface WorkSchedules { 
  "WorkScheduleRule": any
  "PartTimeEmployee": any
  "WeeklyWorkingHrs":any
  "MonthlyWorkingHrs": any
  "isShiftbased": any
  
 }