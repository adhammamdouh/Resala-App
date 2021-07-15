import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { NavController, ToastController } from '@ionic/angular';
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
  
  constructor(private navCtrl: NavController,
              private zone: NgZone,
              private clipboard: Clipboard,
              private alertHandler: AlertHandlerService,
              public privilegeHandler: PrivilegeHandlerService,
              public eventCRUD: EventCRUDService) { }

  async ngOnInit() {
    await this.eventCRUD.getActiveEvents();
    await this.eventCRUD.getCompleteEvents();
  }

  openEventData(event) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        event: JSON.stringify(event),
      }
    };
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(['event-data'], navigationExtras);
    })
  }

  copy() {
    this.clipboard.copy('Clip Board Copy From Ionic Project');
  }

  refreshEvents(ev) {
    this.eventCRUD.refresh(ev);
  }

  searchVolunteers(ev) {
    //this.eventCRUD.search(ev);
  }

  completeVolunteersSearching() {
    //this.eventCRUD.search('', true);
  }
  
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
