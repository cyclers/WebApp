import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maintain",
  templateUrl: "./maintain.component.html",
  styles: []
})
export class MaintainComponent implements OnInit {
  constructor() {}
  infoPagesDropdown: Array<String> = [
    "Contracts",
    "Education",
    "Schedules",
    "Licenses",
    "Immigration",
    "Basic Pay",
    "Allowances",
    "Awards",
    "Files"
  ];
  infoPages: Array<String> = [
    "Overview",
    "Actions",
    "Org Assign.",
    "Dates",
    "Personal",
    "Address",
    "Family",
    "History",
    "Banks"
  ];
  ngOnInit() {}
}
