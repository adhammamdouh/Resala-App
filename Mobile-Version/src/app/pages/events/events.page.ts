import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabProperty } from 'src/app/components/tabs/tab-property';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  tabProperties:TabProperty[] = [{name: 'القادمة', index: 0}, {name: 'السابقة', index: 1}]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openEventData(index) {
    this.router.navigate(['event-data'])
  }

}
