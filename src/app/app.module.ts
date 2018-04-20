import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import { PdmService } from './services/pdm.service';
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
import { ActionsComponent } from './pdm/components/maintain/infopages/actions/actions.component';
import { OrgassignComponent } from './pdm/components/maintain/infopages/orgassign/orgassign.component';
import { PersonalComponent } from './pdm/components/maintain/infopages/personal/personal.component';
import { AddressComponent } from './pdm/components/maintain/infopages/address/address.component';
import { FamilyComponent } from './pdm/components/maintain/infopages/family/family.component';
import { PreviousComponent } from './pdm/components/maintain/infopages/previous/previous.component';
import { BanksComponent } from './pdm/components/maintain/infopages/banks/banks.component';
import { LaborcontractComponent } from './pdm/components/maintain/infopages/laborcontract/laborcontract.component';
import { EducationComponent } from './pdm/components/maintain/infopages/education/education.component';
import { WorkscheduleComponent } from './pdm/components/maintain/infopages/workschedule/workschedule.component';
import { ImmigrationComponent } from './pdm/components/maintain/infopages/immigration/immigration.component';
import { LicensesComponent } from './pdm/components/maintain/infopages/licenses/licenses.component';
import { BasicpayComponent } from './pdm/components/maintain/infopages/basicpay/basicpay.component';
import { AllowancesComponent } from './pdm/components/maintain/infopages/allowances/allowances.component';
import { AwardsComponent } from './pdm/components/maintain/infopages/awards/awards.component';
import { FilesComponent } from './pdm/components/maintain/infopages/files/files.component';
import { DatemilestonesComponent } from './pdm/components/maintain/infopages/datemilestones/datemilestones.component';
import { GeneralinfoComponent } from './pdm/components/maintain/infopages/generalinfo/generalinfo.component';
import { MatNativeDateModule } from '@angular/material/core';
//import {MatMomentDateModule } from '@angular/material-moment-adapter';



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
    TestAreaComponent,
    ActionsComponent,
    OrgassignComponent,
    PersonalComponent,
    AddressComponent,
    FamilyComponent,
    PreviousComponent,
    BanksComponent,
    LaborcontractComponent,
    EducationComponent,
    WorkscheduleComponent,
    ImmigrationComponent,
    LicensesComponent,
    BasicpayComponent,
    AllowancesComponent,
    AwardsComponent,
    FilesComponent,
    DatemilestonesComponent,
    GeneralinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    // HttpModule, 
    FormsModule, HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
   // MatMomentDateModule
  ],
  providers: [PdmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
