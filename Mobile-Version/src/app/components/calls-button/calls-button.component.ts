import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { createGesture, Gesture } from '@ionic/core';
import { IonFab, IonImg } from '@ionic/angular';
import { directions, SwappableElement } from 'src/app/classes/SwappingClass/swappable-element';

@Component({
  selector: 'app-calls-button',
  templateUrl: './calls-button.component.html',
  styleUrls: ['./calls-button.component.scss'],
})
export class CallsButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('imgIcon', {read: ElementRef}) btn: ElementRef;
  maxbelow = 5;
  maxabove = -20;
  callIcon = '../../assets/icon/call.png'
  
  @Input() reset: boolean = false;
  @Output() swapCompleted: EventEmitter<boolean> = new EventEmitter()

  swappableElement: SwappableElement = new SwappableElement();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.reset.currentValue === true
      && changes.reset.currentValue != changes.reset.previousValue) {
        //this.resetBtn();
    }
    // changes.prop contains the old and the new value...
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.swappableElement.applySwapGesture(this.btn, directions.vertical, 0.5, this.maxbelow, this.maxabove);
    this.swappableElement.onSwapCompelete.subscribe((msg: boolean) => {
      this.swapCompleted.emit(msg);
    })  
  }
}
