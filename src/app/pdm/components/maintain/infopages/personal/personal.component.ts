import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { PersonalVM } from '../../../../pdm.vm'

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
    this.pdmService.loadStaffRecord('Staff/' +id + '/Personal/' + id)
    .subscribe(data => this.Personal = data)
  }
}
