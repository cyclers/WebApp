import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonalComponent } from './infopages/personal/personal.component';
import { ActionsComponent } from './infopages/actions/actions.component';
import { OrgassignComponent } from './infopages/orgassign/orgassign.component';
import { DatemilestonesComponent } from './infopages/datemilestones/datemilestones.component';
import { AddressComponent } from './infopages/address/address.component';
import { FamilyComponent } from './infopages/family/family.component';
import { PreviousComponent } from './infopages/previous/previous.component';
import { BanksComponent } from './infopages/banks/banks.component';
import { LaborcontractComponent } from './infopages/laborcontract/laborcontract.component';
import { EducationComponent } from './infopages/education/education.component';
import { WorkscheduleComponent } from './infopages/workschedule/workschedule.component';
import { LicensesComponent } from './infopages/licenses/licenses.component';
import { ImmigrationComponent } from './infopages/immigration/immigration.component';
import { BasicpayComponent } from './infopages/basicpay/basicpay.component';
import { AllowancesComponent } from './infopages/allowances/allowances.component';
import { AwardsComponent } from './infopages/awards/awards.component';
import { FilesComponent } from './infopages/files/files.component';
import { GeneralinfoComponent } from './infopages/generalinfo/generalinfo.component';

@Component({
  selector: "app-maintain",
  templateUrl: "./maintain.component.html",
  styles: []
})
export class MaintainComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}
  infoPagesDropdown: Array<String> = [
    "Contracts",
    "Education",
    "Schedules",
    "Licenses",
    "Immigration",
    "Basic Pay",
    "Allowances",
    "Awards",
    "Files"
  ];
  infoPages: Array<String> = [
    "Overview",
    "Actions",
    "Org Assign.",
    "Dates",
    "Personal",
    "Address",
    "Family",
    "History",
    "Banks"
  ];
  ngOnInit() {}
=======
  @ViewChild(GeneralinfoComponent) private infoPage1: GeneralinfoComponent
  @ViewChild(ActionsComponent) private infoPage2: ActionsComponent
  @ViewChild(OrgassignComponent) private infoPage3: OrgassignComponent
  @ViewChild(DatemilestonesComponent) private infoPage4: DatemilestonesComponent
  @ViewChild(PersonalComponent) private infoPage5: PersonalComponent
  @ViewChild(AddressComponent) private infoPage6: AddressComponent
  @ViewChild(FamilyComponent) private infoPage7: FamilyComponent
  @ViewChild(PreviousComponent) private infoPage8: PreviousComponent
  @ViewChild(BanksComponent) private infoPage9: BanksComponent
  @ViewChild(LaborcontractComponent) private infoPage10: LaborcontractComponent
  @ViewChild(EducationComponent) private infoPage11: EducationComponent
  @ViewChild(WorkscheduleComponent) private infoPage12: WorkscheduleComponent
  @ViewChild(LicensesComponent) private infoPage13: LicensesComponent
  @ViewChild(ImmigrationComponent) private infoPage14: ImmigrationComponent
  @ViewChild(BasicpayComponent) private infoPage15: BasicpayComponent
  @ViewChild(AllowancesComponent) private infoPage16: AllowancesComponent
  @ViewChild(AwardsComponent) private infoPage17: AwardsComponent
  @ViewChild(FilesComponent) private infoPage18: FilesComponent

  id:number
  tabId:number
  model

  constructor() { }

  ngOnInit() {
    this.tabId = 1
  }

  enteredId(id: number){
    this.id = id
    this.loadTab(this.tabId)
  }

  postD(){
    console.log("be5")
    this.infoPage1.postData()
  }

  loadTab(tabNo:any ){
    this.tabId = tabNo

    switch (tabNo)  {
      case 1:
        this.infoPage1.loadInfoPageGeneralInfo(this.id)
        break;
        case 2:
        this.infoPage2.loadInfoPageActions(this.id)
        break;
        case 3:
        this.infoPage3.loadInfoPageOrgAssign(this.id)
        break;
        case 4:
        this.infoPage4.loadInfoPageDateMilestones(this.id)
        break;
        case 5:
        this.infoPage5.loadInfoPagePersonal(this.id)
        break;
        case 6:
        this.infoPage6.loadInfoPageAddress(this.id)
        break;
        case 7:
        this.infoPage7.loadInfoPageFamily(this.id)
        break;
        case 8:
        this.infoPage8.loadInfoPagePreviousEmployers(this.id)
        break;
        case 9:
        this.infoPage9.loadInfoPageBanks(this.id)
        break;
        case 10:
        this.infoPage10.loadInfoPageLaborContract(this.id)
        break;
        case 11:
        this.infoPage11.loadInfoPageEducation(this.id)
        break;
        case 12:
        this.infoPage12.loadInfoPageWorkSchedules(this.id)
        break;
        case 13:
        this.infoPage13.loadInfoPageLicenses(this.id)
        break;
        case 14:
        this.infoPage14.loadInfoPageImmigration(this.id)
        break;
        case 15:
        this.infoPage15.loadInfoPageBasicPay(this.id)
        break;
        case 16:
        this.infoPage16.loadInfoPageAllowances(this.id)
        break;
        case 17:
        this.infoPage17.loadInfoPageAwards(this.id)
        break;
        case 18:
        this.infoPage18.loadInfoPageFiles(this.id)
        break;
        default:
        break;

  }
}
>>>>>>> b67566ef3d9abe8f188be76d38d296e2155f85ea
}
