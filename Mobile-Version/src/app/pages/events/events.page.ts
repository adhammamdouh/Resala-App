import { Component, OnInit } from '@angular/core';
import { TabProperty } from 'src/app/components/tabs/tab-property';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  tabProperties:TabProperty[] = [{name: 'tab 1', index: 0}, {name: 'tab 2', index: 1}]
  constructor() { }

  ngOnInit() {
  }

}
