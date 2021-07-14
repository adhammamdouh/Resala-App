import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { directions, SwappableElement } from 'src/app/classes/SwappingClass/swappable-element';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { EventProperties } from './event-properties';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit, AfterViewInit {
  waveIcon = '../../assets/icon/wave.svg'
  @ViewChild('eventCard', {read: ElementRef}) eventCard: ElementRef;

  @Input() property: EventProperties;
  @Input() index: Number;
  @Input() event: ResalaEvent
  @Output() onSwap: EventEmitter<Number> = new EventEmitter();

  swappableElement: SwappableElement = new SwappableElement();
  isSwapping: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.swappableElement.applySwapGesture(this.eventCard, directions.horizontal, 0.5, 0, -15);
    this.swappableElement.onSwapCompelete.subscribe((msg) => {
      this.onSwap.emit(this.index);
    })

    this.swappableElement.onSwapStart.subscribe((msg) => {
      //console.log('asdfkdsaljf')
      this.isSwapping = true;
      this.cd.detectChanges();
      //console.log(this.isSwapping)

    })

    this.swappableElement.onSwapReset.subscribe((msg) => {
      this.isSwapping = false;
      this.cd.detectChanges();
    })
  }
  clickCard() {
  }
  
}
