import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaintainRoutingModule } from "./maintain-routing.module";
import { MaintainComponent } from "./maintain.component";
import { ActionsComponent } from "./infopages/actions/actions.component";
import { OrgassignComponent } from "./infopages/orgassign/orgassign.component";
import { PersonalComponent } from "./infopages/personal/personal.component";
import { AddressComponent } from "./infopages/address/address.component";
import { FamilyComponent } from "./infopages/family/family.component";
import { PreviousComponent } from "./infopages/previous/previous.component";
import { BanksComponent } from "./infopages/banks/banks.component";
import { LaborcontractComponent } from "./infopages/laborcontract/laborcontract.component";
import { EducationComponent } from "./infopages/education/education.component";
import { WorkscheduleComponent } from "./infopages/workschedule/workschedule.component";
import { ImmigrationComponent } from "./infopages/immigration/immigration.component";
import { LicensesComponent } from "./infopages/licenses/licenses.component";
import { BasicpayComponent } from "./infopages/basicpay/basicpay.component";
import { AllowancesComponent } from "./infopages/allowances/allowances.component";
import { AwardsComponent } from "./infopages/awards/awards.component";
import { FilesComponent } from "./infopages/files/files.component";
import { DatemilestonesComponent } from "./infopages/datemilestones/datemilestones.component";
import { GeneralinfoComponent } from "./infopages/generalinfo/generalinfo.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { PdmService } from "../../../services/pdm.service";
import { InfopageComponent } from "./infopages/infopage.component";

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, MaintainRoutingModule],
  declarations: [
    MaintainComponent,
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
    GeneralinfoComponent,
    InfopageComponent
  ],
  providers: [PdmService]
})
export class MaintainModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
