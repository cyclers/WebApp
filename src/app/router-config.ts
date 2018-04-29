import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PdmComponent } from "./pdm/pdm.component";
import { BrowseComponent } from "./pdm/components/browse/browse.component";
import { MaintainComponent } from "./pdm/components/maintain/maintain.component";

import { EmployeeActionComponent } from "./pdm/components/personeel-action/employee-action/employee-action.component";
import { PersonnelActionComponent } from "./pdm/components/personeel-action/personnel-action/personnel-action.component";




export const routeConfig = [
    { path : 'home', component: HomeComponent},
    { path : 'personnel', component: PdmComponent},
    { path: 'personnel/browse', component: BrowseComponent },
    { path: 'personnel/maintain', component: MaintainComponent },
    { path: 'personnel/employee-action', component: EmployeeActionComponent},
    { path: 'personnel/employee-action/personnel-acton/:url', component: PersonnelActionComponent},
    { path: '', component: HomeComponent},] 

    