import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-data-collector-header',
  templateUrl: './event-data-collector-header.component.html',
  styleUrls: ['./event-data-collector-header.component.scss'],
})
export class EventDataCollectorHeaderComponent implements OnInit {
  wave = '../../assets/icon/wave.svg';
  
  constructor() { }

  ngOnInit() {}

}
