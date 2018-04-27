import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import * as _ from 'lodash'

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
    this.pdmService.loadStaffRecord(id + '/Awards/')
    .subscribe(data => this.Awards = _.last(data))
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
