import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabProperty } from 'src/app/components/tabs/tab-property';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
})
export class VolunteersPage implements OnInit {
  tabProperties:TabProperty = { selectedTabIndex: 0, 
                                tabs: [{name: 'TABS.active', index: 0}, {name: 'TABS.inactive', index: 1}, {name: 'TABS.archive', index: 2}]}
  
  addButtonNavigationPageName: string = 'volunteer-form';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  openVolunteerData(index) {
    this.router.navigate(['volunteer-data'])
  }

}
