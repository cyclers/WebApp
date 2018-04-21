import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styles: []
})
export class AwardsComponent implements OnInit {
  Awards: Awards

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }

  loadInfoPageAwards(id){
    this.pdmService.loadStaffRecord('Staff/' +id + '/Awards/' + id)
    .subscribe(data => this.Awards = data)
    }
    
}

interface Awards {
  "id": any
  "StaffId":any
  "AwardType": any
  "TargetBonus": any
  "Currency": any
  "Percentage": any
}
