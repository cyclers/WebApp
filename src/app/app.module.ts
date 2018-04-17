import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { PersonService } from './person.service'
import { AppComponent } from './app.component';
import { BrowseComponent } from './pdm/components/browse/browse.component';
import { PersonnelListComponent } from './pdm/components/browse/personnel-list/personnel-list.component';
import { PersonnelSidebarComponent } from './pdm/components/browse/personnel-sidebar/personnel-sidebar.component';
import { PersonnelTableComponent } from './pdm/components/browse/personnel-table/personnel-table.component';
import { HomeComponent } from './home/home.component';
import { routeConfig } from './router-config';
import { PdmComponent } from './pdm/pdm.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopbarComponent } from './layout/wrapper/topbar/topbar.component';
import { FooterComponent } from './layout/wrapper/footer/footer.component';
import { MaintainComponent } from './pdm/components/maintain/maintain.component';
import { TestAreaComponent } from './home/test-area/test-area.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    PersonnelListComponent,
    PersonnelSidebarComponent,
    PersonnelTableComponent,
    HomeComponent,
    PdmComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    MaintainComponent,
    TestAreaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
