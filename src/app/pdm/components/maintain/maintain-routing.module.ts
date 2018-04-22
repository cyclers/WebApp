import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaintainComponent } from "./maintain.component";
import { InfopageComponent } from "./infopages/infopage.component";

const routeConfig: Routes = [
  { path: "personnel/maintain", component: MaintainComponent },
  { path: "personnel/maintain/:infopage/:id", component: InfopageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routeConfig)],
  exports: [RouterModule]
})
export class MaintainRoutingModule {}
