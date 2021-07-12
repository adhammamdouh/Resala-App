import { EventEmitter } from "@angular/core";
import { createGesture, Gesture } from '@ionic/core';

export enum directions {
    horizontal = 0,
    vertical = 1
}

export class SwappableElement {
    private element: any = null;
    private direction: directions = directions.horizontal;
    private minimumValue: number = 0;
    private maximumValue: number = 0;
    private swapDuration: number = 0.5;
    private resetAfterComplete: boolean = true;
    public onSwapCompelete: EventEmitter<boolean> = new EventEmitter<boolean>();
    public onSwapStart: EventEmitter<boolean> = new EventEmitter<boolean>();
    public onSwapReset: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }
  
    applySwapGesture(element: any, direction: directions, duration: number, minimumValue: number, maximumValue: number, resetAfterComplete: boolean = true) {
        this.element = element;
        this.direction = direction;
        this.minimumValue = minimumValue;
        this.maximumValue = maximumValue;
        this.swapDuration = duration;
        this.resetAfterComplete = resetAfterComplete;

        let lastDelta = 0;
        const gesture = createGesture({
          el: this.element.nativeElement,
          gestureName: 'swap-gesture',
          gesturePriority: 300,
          threshold: 3,
          //blurOnStart: true,
          direction: this.getGestureDirection(direction),
          onStart: ev => {
            this.onSwapStart.emit(true);
            this.element.nativeElement.style.transitionDuration  = '';
          },
          onMove: ev => { lastDelta = this.swapButton(ev, this.element, this.minimumValue, this.maximumValue, lastDelta) },
          
          onEnd: ev => {
            lastDelta = this.endSwap(this.element);
          }
        });
    
        gesture.enable(true);
      }
    
      getNewPosition(delta, currentPostion, min, max, lastDelta) {
        
        let newPosition = (currentPostion + (delta - lastDelta))
        return (newPosition < max ? max : 
          newPosition > min ? min : newPosition);
      }
    
      swapButton(ev, btn, min, max, lastDelta) {
        const style = window.getComputedStyle(btn.nativeElement);
        let matrix = new WebKitCSSMatrix(style.transform);
        let currentPostion = this.getCurrentPosition(this.direction, matrix);
  
        this.retransform(this.direction, this.getNewPosition(this.getDelta(this.direction, ev), currentPostion, min, max, lastDelta), 0);
    
        return this.getDelta(this.direction, ev);
      }
    
      retransform(direction, position, duration) {
        
        switch(direction) {
          case directions.horizontal:
            this.element.nativeElement.style.transform = 'translateX(' + position + 'px)';
            break;
          case directions.vertical:
            this.element.nativeElement.style.transform = 'translateY(' + position + 'px)';
            break;
        }
  
        this.element.nativeElement.style.transitionDuration  = duration + 's'
      }
    
      reset() {
        this.retransform(this.direction, this.minimumValue, this.swapDuration);
        this.onSwapReset.emit(true);
      }
    
      endSwap(btn) {
        const style = window.getComputedStyle(btn.nativeElement)
        let matrix = new WebKitCSSMatrix(style.transform);
        let currentPostion = this.getCurrentPosition(this.direction, matrix);
    
        if(currentPostion < this.maximumValue*3/4) {
          this.buttonSwapped();
        } else {
          this.reset();
        }
    
        return 0;
      }
    
      buttonSwapped() {
        this.retransform(this.direction, this.maximumValue, this.swapDuration);
        this.onSwapCompelete.emit(true);
        if(this.resetAfterComplete) this.reset()
      }
  
      getCurrentPosition(direction: directions, matrix) {
        switch(direction) {
          case directions.horizontal:
            return matrix.m41;
          case directions.vertical:
            return matrix.m42;
        }
      }
  
      getDelta(direction: directions, ev) {
        switch(direction) {
          case directions.horizontal:
            return ev.deltaX;
          case directions.vertical:
            return ev.deltaY;
        }
      }

      getGestureDirection(direction: directions) {
         switch(direction) {
          case directions.horizontal:
            return 'x';
          case directions.vertical:
            return 'y';
        }
      }
}
