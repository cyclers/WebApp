import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pdm",
  templateUrl: "./pdm.component.html",
  styles: []
})
export class PdmComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  sections = [
    {
      id: "1",
      title: "Browse Staff Information",
      description: "Access quick information...",
      url: "./browse"
    },
    {
      id: "2",
      title: "Display and Maintain Master Data",
      description: "See and change details...",
      url: "./maintain"
    },
    {
      id: "3",
      title: "Personnel Actions",
      description: "Upload changes...",
      url: "./actions"
    }
  ];
}
