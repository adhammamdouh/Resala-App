import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import { Response } from 'src/app/domains/response';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { Status, VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';

export enum volunteerTabs {
  active = 0,
  inactive = 1,
  archive = 2
}

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
})
export class VolunteersPage implements OnInit {
  volunteerTabsTemp = volunteerTabs;
  tabProperties:TabProperty = { selectedTabIndex: volunteerTabs.active, 
                                tabs: [{name: 'TABS.active', index: volunteerTabs.active}, {name: 'TABS.inactive', index: volunteerTabs.inactive}]}
  
  addButtonNavigationPageName: string = 'volunteer-form';

  activeVolunteers: Volunteer[] = this.volunteerCRUD.activeVolunteers;
  inactiveVolunteers: Volunteer[] = this.volunteerCRUD.inactiveVolunteers;
  requestToArcVolunteers: Volunteer[] = this.volunteerCRUD.requestToVolunteers;

  searchingMode: boolean = false;

  constructor(private navCtrl: NavController,
              public privilegeHandler: PrivilegeHandlerService,
              public volunteerCRUD: VolunteerCRUDService,
              private zone: NgZone,
              private navParams: NavParams) { }

  async ngOnInit() {
    if(this.privilegeHandler.isShowRequestToArchiveValid()) {
      this.tabProperties.tabs.push({name: 'TABS.archive', index: volunteerTabs.archive});
    }
    
    this.volunteerCRUD.getActiveVolunteers().subscribe((msg: Response) => {this.activeVolunteers = msg.message});
    this.volunteerCRUD.getInactiveVolunteers().subscribe((msg: Response) => {this.inactiveVolunteers = msg.message});
    this.volunteerCRUD.getRequestToArchiveVolunteers().subscribe((msg: Response) => {this.requestToArcVolunteers = msg.message});
  }

  
  ionViewWillEnter() {
    console.log("test", this.navParams.get('refresh'));
    console.log('df');
  }

  openVolunteerData(volunteer) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        volunteer: JSON.stringify(volunteer),
      }
    };
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(['volunteer-data'], navigationExtras);
    })
    //this.router.navigate(['volunteer-data'])
  }

  refreshVolunteers(ev, tab: volunteerTabs) {
    this.volunteerCRUD.refresh().subscribe(() => {
      this.activeVolunteers = this.volunteerCRUD.activeVolunteers;
      this.inactiveVolunteers = this.volunteerCRUD.inactiveVolunteers;
      this.requestToArcVolunteers = this.volunteerCRUD.requestToVolunteers;
      ev.target.complete();
    }, () => {ev.target.complete();}
    );
  }

  onSearchStart(ev: TabProperty) {
    const listTemp = this.volunteerCRUD.search(ev);
  }

  searchVolunteers(ev) {
    this.searchingMode = true;
    const listTemp = this.volunteerCRUD.search(ev);
    this.activeVolunteers = listTemp[Status.active];
    this.inactiveVolunteers = listTemp[Status.archive];
    this.requestToArcVolunteers = listTemp[Status.requestToArchive];
  }

  completeVolunteersSearching() {
    this.searchingMode = false;
    this.volunteerCRUD.completeSearch();

    this.activeVolunteers = this.volunteerCRUD.activeVolunteers;
    this.inactiveVolunteers = this.volunteerCRUD.inactiveVolunteers;
    this.requestToArcVolunteers = this.volunteerCRUD.requestToVolunteers;

  }
  
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  private closeRefresher(event = null) {
    if(event) {event.target.complete();}
  }
}
