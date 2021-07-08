import { Component, Input, OnInit } from '@angular/core';
import { TabProperty } from '../tabs/tab-property';

@Component({
  selector: 'app-main-page-bar',
  templateUrl: './main-page-bar.component.html',
  styleUrls: ['./main-page-bar.component.scss'],
})
export class MainPageBarComponent implements OnInit {
  @Input() tabProperties: TabProperty[] = []
  @Input() title: string = '';

  showSearch = false;
  constructor() { }

  ngOnInit() {}

  onSearchClick() {
    this.showSearch = true;
  }

  onSearchBackClick() {
    this.showSearch = false;
  }

}
