import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  tabProperties:TabProperty = {selectedTabIndex: 0, tabs: [{name: 'TABS.upcoming', index: 0}, {name: 'TABS.pervious', index: 1}]}
  addButtonNavigationPageName: string = 'event-form';
  
  constructor(private router: Router,
              private clipboard: Clipboard,
              private alertHandler: AlertHandlerService,) { }

  ngOnInit() {
    //this.alertHandler.displayAlert("");
  }

  openEventData(index) {
    this.router.navigate(['event-data'])
  }

  copy() {
    this.clipboard.copy('Clip Board Copy From Ionic Project');
    //console.log('hmmmmmmmmmm');
  }


}
