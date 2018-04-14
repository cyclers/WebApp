import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowseComponent } from './pdm/components/browse/browse.component';
import { PersonnelListComponent } from './pdm/components/browse/personnel-list/personnel-list.component';
import { PersonnelSidebarComponent } from './pdm/components/browse/personnel-sidebar/personnel-sidebar.component';
import { PersonnelTableComponent } from './pdm/components/browse/personnel-table/personnel-table.component';
import { HomeComponent } from './home/home.component';
import { routeConfig } from './router-config';
import { PdmComponent } from './pdm/pdm.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    PersonnelListComponent,
    PersonnelSidebarComponent,
    PersonnelTableComponent,
    HomeComponent,
    PdmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
