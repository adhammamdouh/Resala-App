import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.generateTabSize();
  }

  generateTabSize() {
    const proplength = this.tabProperties.length;
    if(proplength != 0) {
      const newTabSize = 12/proplength;
      this.tabSize = newTabSize > 1 ? Math.floor(newTabSize) : Math.ceil(newTabSize);
    }
  }

  tabClicked(index) {
    this.bgOffset = index * this.tabSize;    
  }

}
