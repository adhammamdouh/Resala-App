import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';

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
  
  constructor(private navCtrl: NavController,
              public privilegeHandler: PrivilegeHandlerService,
              public volunteerCRUD: VolunteerCRUDService,
              private zone: NgZone) { }

  async ngOnInit() {
    if(this.privilegeHandler.isShowRequestToArchiveValid())
      this.tabProperties.tabs.push({name: 'TABS.archive', index: volunteerTabs.archive});
    
    await this.volunteerCRUD.getActiveVolunteers();
    await this.volunteerCRUD.getInactiveVolunteers();
    await this.volunteerCRUD.getRequestToArchiveVolunteers();

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

  async refreshVolunteers(ev, tab: volunteerTabs) {
    this.volunteerCRUD.refresh(ev, tab);
    //ev.target.complete();
  }

  /*onSearchStart(ev: TabProperty) {
    switch(ev.selectedTabIndex) {
      case volunteerTabs.active:
        this.volunteerCRUD.copyListToTemp(this.volunteerCRUD.activeVolunteers);
        break;
      case volunteerTabs.inactive:
        this.volunteerCRUD.copyListToTemp(this.volunteerCRUD.inactiveVolunteers);
        break;
      case volunteerTabs.archive:
        this.volunteerCRUD.copyListToTemp(this.volunteerCRUD.requestToVolunteers);
        break;
    }
  }

  //value, volunteerList: Volunteer[], tab: volunteerTabs, complete = false
  searchVolunteers(ev) {
    switch(this.tabProperties.selectedTabIndex) {
      case volunteerTabs.active:
        this.volunteerCRUD.search(ev, this.volunteerCRUD.activeVolunteers);
        break;
      case volunteerTabs.inactive:
        this.volunteerCRUD.search(ev, this.volunteerCRUD.inactiveVolunteers);
        break;
      case volunteerTabs.archive:
        this.volunteerCRUD.search(ev, this.volunteerCRUD.requestToVolunteers);
        break;
    }
  }

  completeVolunteersSearching() {
    switch(this.tabProperties.selectedTabIndex) {
      case volunteerTabs.active:
        this.volunteerCRUD.search('', this.volunteerCRUD.activeVolunteers, true);
        break;
      case volunteerTabs.inactive:
        this.volunteerCRUD.search('', this.volunteerCRUD.inactiveVolunteers, true);
        break;
      case volunteerTabs.archive:
        this.volunteerCRUD.search('', this.volunteerCRUD.requestToVolunteers, true);
        break;
    }
  }*/
  
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
