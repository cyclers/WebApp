import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PdmComponent } from "./pdm/pdm.component";
import { BrowseComponent } from "./pdm/components/browse/browse.component";
import { PageNotFoundComponent } from "./not-found/not-found.component";

const routeConfig: Routes = [
  { path: "home", component: HomeComponent },
  { path: "personnel", component: PdmComponent },
  { path: "personnel/browse", component: BrowseComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
