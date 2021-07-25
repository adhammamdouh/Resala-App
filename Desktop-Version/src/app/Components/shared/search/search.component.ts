import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onEntering = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(value){
    this.onEntering.emit(value);
  }

}
