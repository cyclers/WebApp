import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PdmComponent } from "./pdm/pdm.component";



export const routeConfig = [
    { path : 'home', component: HomeComponent},
    { path : 'personnel', component: PdmComponent},
    { path: '', component: HomeComponent},]