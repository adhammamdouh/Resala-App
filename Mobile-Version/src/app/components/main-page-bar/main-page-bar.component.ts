import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TabProperty } from '../tabs/tab-property';

@Component({
  selector: 'app-main-page-bar',
  templateUrl: './main-page-bar.component.html',
  styleUrls: ['./main-page-bar.component.scss'],
})
export class MainPageBarComponent implements OnInit {
  @Input() tabProperties: TabProperty;
  @Input() title: string = '';
  @Input() addButtonNavigationPageName: string = '';
  @Output() tabPropertiesChange: EventEmitter<TabProperty> = new EventEmitter();

  showSearch = false;
  constructor(private router: Router) { }

  ngOnInit() {}

  onSearchClick() {
    this.showSearch = true;
  }

  onSearchBackClick() {
    this.showSearch = false;
  }

  goToAddForm() {
    this.router.navigate([this.addButtonNavigationPageName]);
  }

}
