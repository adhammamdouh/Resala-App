import { Component, Input, OnInit } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';

@Component({
  selector: 'app-event-data-collector-header',
  templateUrl: './event-data-collector-header.component.html',
  styleUrls: ['./event-data-collector-header.component.scss'],
})
export class EventDataCollectorHeaderComponent implements OnInit {
  @Input() event: ResalaEvent;

  wave = '../../assets/icon/wave.svg';
  
  constructor() { }

  ngOnInit() {}

}
