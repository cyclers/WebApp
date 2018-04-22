import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PdmService } from "./services/pdm.service";
import { AppComponent } from "./app.component";
import { BrowseComponent } from "./pdm/components/browse/browse.component";
import { PersonnelListComponent } from "./pdm/components/browse/personnel-list/personnel-list.component";
import { PersonnelSidebarComponent } from "./pdm/components/browse/personnel-sidebar/personnel-sidebar.component";
import { PersonnelTableComponent } from "./pdm/components/browse/personnel-table/personnel-table.component";
import { HomeComponent } from "./home/home.component";
import { PdmComponent } from "./pdm/pdm.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { TopbarComponent } from "./layout/wrapper/topbar/topbar.component";
import { FooterComponent } from "./layout/wrapper/footer/footer.component";
import { TestAreaComponent } from "./home/test-area/test-area.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaintainModule } from "./pdm/components/maintain/maintain.module";
import { PageNotFoundComponent } from "./not-found/not-found.component";

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
    TestAreaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MaintainModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
