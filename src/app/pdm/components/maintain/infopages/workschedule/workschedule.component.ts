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
    this.pdmService.loadStaffRecord('Staff/' +id + '/WorkSchedules/' + id)
      .subscribe(data => this.workSchedules = data)
  }
}
 export interface WorkSchedules { 
  "WorkScheduleRule": any
  "PartTimeEmployee": any
  "WeeklyWorkingHrs":any
  "MonthlyWorkingHrs": any
  "Shiftbased": any
  
 }