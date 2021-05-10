import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchIcon = '../../assets/icon/search.svg'
  arrowDown = '../../assets/icon/arrows/down-arrow.svg'

  constructor() { }

  ngOnInit() {}

}
