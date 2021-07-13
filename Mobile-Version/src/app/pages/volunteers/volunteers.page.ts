import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router,
              public privilegeHandler: PrivilegeHandlerService,
              public volunteerCRUD: VolunteerCRUDService) { }

  async ngOnInit() {
    if(this.privilegeHandler.isShowRequestToArchiveValid())
      this.tabProperties.tabs.push({name: 'TABS.archive', index: volunteerTabs.archive});
    await this.volunteerCRUD.getActiveVolunteers();
  }

  openVolunteerData(index) {
    this.router.navigate(['volunteer-data'])
  }

}
