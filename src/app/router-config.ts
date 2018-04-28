import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PdmComponent } from "./pdm/pdm.component";
import { BrowseComponent } from "./pdm/components/browse/browse.component";
import { MaintainComponent } from "./pdm/components/maintain/maintain.component";
import { PersoneelActionComponent } from "./pdm/components/personeel-action/personeel-action/personeel-action.component";
import { EmployeeActionComponent } from "./pdm/components/personeel-action/employee-action/employee-action.component";
import { DashboardsComponent } from "./pdm/components/dashboards/dashboards.component";




export const routeConfig = [
    { path : 'home', component: HomeComponent},
    { path : 'personnel', component: PdmComponent},
    { path: 'personnel/browse', component: BrowseComponent },
    { path: 'personnel/maintain', component: MaintainComponent },
    { path: 'personeel/employee-action', component: EmployeeActionComponent},
    { path: 'personeel/employee-action/personeel-acton/:url', component: PersoneelActionComponent},
    { path: 'personnel/dashboards', component: DashboardsComponent},
    { path: '', component: HomeComponent},] 

    