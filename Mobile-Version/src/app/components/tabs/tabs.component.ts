import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TabProperty } from './tab-property';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabSize = 12;
  bgOffset = 0;
  @Input() tabProperties: TabProperty[] = [{name: 'tab1', index: 0}, {name: 'tab2', index: 1}]
  @Input() selectedTab: TabProperty;
  @Output() selectedTabChange: EventEmitter<TabProperty> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.generateTabSize();
    if(this.selectedTab === undefined || this.selectedTab === null) {
      this.selectedTab = (this.tabProperties.length > 1) ? this.tabProperties[0] : {name: '', index: 0};
    }
  }

  generateTabSize() {
    const proplength = this.tabProperties.length;
    if(proplength != 0) {
      const newTabSize = 12/proplength;
      this.tabSize = newTabSize > 1 ? Math.floor(newTabSize) : Math.ceil(newTabSize);
    }
  }

  tabClicked(index) {
    //this.bgOffset = index * this.tabSize;
    this.selectedTab = this.tabProperties[index];
    this.selectedTabChange.emit(this.selectedTab);
  }

}
