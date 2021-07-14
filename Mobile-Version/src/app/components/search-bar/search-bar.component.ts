import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @Output() onBackClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  searchIcon = '../../assets/icon/search.svg'
  arrowDown = '../../assets/icon/arrows/down-arrow.svg'

  isAdvancedSearchOpened: boolean = false;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
  }
  openAdvancedSearch() {
    this.isAdvancedSearchOpened = !this.isAdvancedSearchOpened;
    console.log(this.isAdvancedSearchOpened);

  }

  onClick() {
    this.onBackClick.emit(true);
  }

  onSearching(ev) {
    this.onSearch.emit(ev.target.value);
  }

}
