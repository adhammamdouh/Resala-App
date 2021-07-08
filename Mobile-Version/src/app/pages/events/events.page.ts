import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TabProperty } from 'src/app/components/tabs/tab-property';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  tabProperties:TabProperty[] = [{name: 'TABS.upcoming', index: 0}, {name: 'TABS.pervious', index: 1}]
  constructor(private router: Router,
              private clipboard: Clipboard,
              private alertHandler: AlertHandlerService) { }

  ngOnInit() {
    this.alertHandler.displayAlert("");
  }

  openEventData(index) {
    this.router.navigate(['event-data'])
  }

  copy() {
    this.clipboard.copy('Clip Board Copy From Ionic Project');
    //console.log('hmmmmmmmmmm');
  }

}
