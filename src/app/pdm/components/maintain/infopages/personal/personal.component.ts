import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { PersonalVM } from '../../../../pdm.vm'
import * as _ from 'lodash'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styles: []
})
export class PersonalComponent implements OnInit {
  Personal:PersonalVM

  constructor(private pdmService: PdmService) { }

  ngOnInit() {
  }

  loadInfoPagePersonal(id){
    this.pdmService.loadStaffRecord(id + '/Personal/')
    .subscribe(data => this.Personal = _.last(data))
  }
}
