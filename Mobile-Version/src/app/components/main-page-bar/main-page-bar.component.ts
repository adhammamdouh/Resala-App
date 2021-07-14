import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
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
  @Input() showAddButton: boolean = false;
  @Output() tabPropertiesChange: EventEmitter<TabProperty> = new EventEmitter();
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onSearchComplete: EventEmitter<boolean> = new EventEmitter();

  showSearch = false;
  constructor(private router: Router,
              private menu: MenuController) { }

  ngOnInit() {}

  onSearchClick() {
    this.showSearch = true;
  }

  onSearchBackClick() {
    this.showSearch = false;
    this.onSearchComplete.emit(true);
  }

  onSearching(ev) {
    this.onSearch.emit(ev);
  }

  goToAddForm() {
    const navigationExtras: NavigationExtras =  {
                                                  queryParams: {
                                                    mode: JSON.stringify('add'),
                                                  }
                                                };
    this.router.navigate([this.addButtonNavigationPageName], navigationExtras);
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
