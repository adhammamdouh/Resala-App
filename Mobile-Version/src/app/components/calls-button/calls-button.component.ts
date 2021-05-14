import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { createGesture, Gesture } from '@ionic/core';
import { IonFab, IonImg } from '@ionic/angular';

@Component({
  selector: 'app-calls-button',
  templateUrl: './calls-button.component.html',
  styleUrls: ['./calls-button.component.scss'],
})
export class CallsButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('imgIcon', {read: ElementRef}) btn: ElementRef;
  minAbsBottom = 5;
  maxAbsBottom = -20;
  absBottomRange = 20;
  callIcon = '../../assets/icon/call.png'
  
  @Input() reset: boolean = false;
  @Output() swapCompleted: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.reset.currentValue === true
      && changes.reset.currentValue != changes.reset.previousValue) {
        this.resetBtn();
        
    }
    console.log('reset', changes.reset.currentValue, changes.reset.previousValue, changes.reset.currentValue != changes.reset.previousValue)
    // changes.prop contains the old and the new value...
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.applySwapGesture();
  }

  applySwapGesture() {
    let lastDeltaY = 0;
    const gesture = createGesture({
      el: this.btn.nativeElement,
      gestureName: 'swap-gesture',
      gesturePriority: 300,
      threshold: 0,
      blurOnStart: true,
      onStart: ev => {
        this.btn.nativeElement.style.transitionDuration  = '';
      },
      onMove: ev => { lastDeltaY = this.swapButton(ev, this.btn, this.minAbsBottom, this.maxAbsBottom, lastDeltaY) },
      
      onEnd: ev => {
        lastDeltaY = this.endSwap(this.btn);
      }
    });

    gesture.enable(true);
  }

  getNewPosition(deltaY, currentPostion, min, max, lastDeltaY) {

    let newPosition = (currentPostion + (deltaY - lastDeltaY))
    return (newPosition < max ? max : 
      newPosition > min ? min : newPosition);
  }

  swapButton(ev, btn, min, max, lastDeltaY) {
    const style = window.getComputedStyle(btn.nativeElement)
    let matrix = new WebKitCSSMatrix(style.transform);
    let currentPostion = matrix.m42;
    this.retransform(btn, this.getNewPosition(ev.deltaY, currentPostion, min, max, lastDeltaY), 0); //

    return ev.deltaY
  }

  retransform(btn, position, duration) {
    btn.nativeElement.style.transform = 'translateY(' + position + 'px)';
    btn.nativeElement.style.transitionDuration  = duration + 's'
  }

  resetBtn() {
    this.retransform(this.btn, 5, 0.5);
  }

  endSwap(btn) {
    const style = window.getComputedStyle(btn.nativeElement)
    let matrix = new WebKitCSSMatrix(style.transform);
    let currentPostion = matrix.m42;

    if(currentPostion < -5) {
      this.buttonSwapped();
    } else {
      this.resetBtn();
    }

    return 0;
  }

  buttonSwapped() {
    this.retransform(this.btn, this.maxAbsBottom, 0.5);
    this.swapCompleted.emit(true);
  }
}
