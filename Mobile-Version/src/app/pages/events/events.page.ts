import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';
import { EventCRUDService } from 'src/app/services/EventCRUD/event-crud.service';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';

export enum eventTabs {
  previous = 0,
  upcoming = 1,
}

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventTabsTemp = eventTabs;
  tabProperties:TabProperty = {selectedTabIndex: eventTabs.upcoming, 
                              tabs: [{name: 'TABS.upcoming', index: eventTabs.upcoming}, {name: 'TABS.pervious', index: eventTabs.previous}]}
  addButtonNavigationPageName: string = 'event-form';
  
  constructor(private router: Router,
              private clipboard: Clipboard,
              private alertHandler: AlertHandlerService,
              public privilegeHandler: PrivilegeHandlerService,
              public eventCRUD: EventCRUDService) { }

  ngOnInit() {
    //this.alertHandler.displayAlert("");
    this.eventCRUD.getAllEvents();
  }

  openEventData(index) {
    this.router.navigate(['event-data'])
  }

  copy() {
    this.clipboard.copy('Clip Board Copy From Ionic Project');
    //console.log('hmmmmmmmmmm');
  }


}
