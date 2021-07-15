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
  @Input() tabProperties: TabProperty = {selectedTabIndex: 0, tabs: [{name: 'tab1', index: 0}, {name: 'tab2', index: 1}] }
  @Output() tabPropertiesChange: EventEmitter<TabProperty> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.tabProperties.selectedTabIndex === undefined || this.tabProperties.selectedTabIndex === null) {
      this.tabProperties.selectedTabIndex = (this.tabProperties.tabs.length > 1) ? this.tabProperties[0] : {name: '', index: 0};
    }
  }

  tabClicked(index) {
    //this.bgOffset = index * this.tabSize;
    this.tabProperties.selectedTabIndex = this.tabProperties.tabs[index].index;
    this.tabPropertiesChange.emit(this.tabProperties);
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.index;
  }

}
