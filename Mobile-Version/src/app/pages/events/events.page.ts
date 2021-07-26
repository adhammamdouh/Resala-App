import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';
import { EventCRUDService, EventStatus } from 'src/app/services/EventCRUD/event-crud.service';
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

  activeEvents: ResalaEvent[] = this.eventCRUD.activeEvents;
  completedEvents: ResalaEvent[] = this.eventCRUD.completedEvents;

  searchingMode: boolean = false;

  constructor(private navCtrl: NavController,
              private zone: NgZone,
              private clipboard: Clipboard,
              private alertHandler: AlertHandlerService,
              public privilegeHandler: PrivilegeHandlerService,
              public eventCRUD: EventCRUDService,
              private route: ActivatedRoute) { 
                
              }

  ngOnInit() {
    this.eventCRUD.getActiveEvents().subscribe(() => { this.activeEvents = this.eventCRUD.activeEvents });
    this.eventCRUD.getCompleteEvents().subscribe(() => { this.completedEvents = this.eventCRUD.completedEvents });
    console.log('load')
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

  refreshEvents(ev = null) {
    this.eventCRUD.refresh().subscribe( () => {
      this.activeEvents = this.eventCRUD.activeEvents;
      this.completedEvents = this.eventCRUD.completedEvents;
      if(ev) ev.target.complete();
    }, () => {
      if(ev) ev.target.complete();
    }
    );
  }

  searchEvent(ev) {
    this.searchingMode = true;

    const eventList = this.eventCRUD.search(ev);
    this.activeEvents = eventList[EventStatus.active];
    this.completedEvents = eventList[EventStatus.completed];
  }

  completeEventSearching() {
    this.searchingMode = false;
    this.eventCRUD.completeSearching();
    
    this.activeEvents = this.eventCRUD.activeEvents;
    this.completedEvents = this.eventCRUD.completedEvents;
  }
  
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
}
