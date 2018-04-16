import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personnel-sidebar',
  templateUrl: './personnel-sidebar.component.html',
  styles: []
})
export class PersonnelSidebarComponent implements OnInit {



  openSidebar: boolean = true
  staff: number
  constructor() {   }

  ngOnInit() {

  }


  setClasses() {

    this.openSidebar = !this.openSidebar
    if (this.openSidebar) {
      let classes = { 'animated sidebar-open': this.openSidebar }
      return classes
    } else {
      let classes = { 'animated': !this.openSidebar }
      return classes
    }


  }

}
