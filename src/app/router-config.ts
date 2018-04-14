import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";



export const routeConfig = [
    { path : 'home', component: HomeComponent},
    { path: '', component: AppComponent},]