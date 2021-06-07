import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventProperties } from './event-properties';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() property: EventProperties;
  @Input() index: number;
  @Output() click: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  clickCard() {
    this.click.emit(this.index);
  }

}
