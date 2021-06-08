import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TabProperty } from 'src/app/components/tabs/tab-property';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  tabProperties:TabProperty[] = [{name: 'القادمة', index: 0}, {name: 'السابقة', index: 1}]
  constructor(private router: Router,
              private clipboard: Clipboard) { }

  ngOnInit() {
  }

  openEventData(index) {
    this.router.navigate(['event-data'])
  }

  copy() {
    this.clipboard.copy('Clip Board Copy From Ionic Project');
    console.log('hmmmmmmmmmm');
  }

}
