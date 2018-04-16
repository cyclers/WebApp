import { Component, OnInit } from '@angular/core';
import { BrowseVM } from '../personnel-table/personnel-table.component';


@Component({
  selector: 'app-personnel-sidebar',
  templateUrl: './personnel-sidebar.component.html',
  styles: []
})
export class PersonnelSidebarComponent implements OnInit {



  openSidebar: boolean = false
  staff: BrowseVM
  constructor() {   }

  ngOnInit() {

  }


  setClasses() {
    
    if (this.openSidebar) {
      let classes = { 'animated sidebar-open': this.openSidebar }
      return classes
    } 
    else {
      let classes = { 'animated': !this.openSidebar }
      return classes
    }


  }

}
