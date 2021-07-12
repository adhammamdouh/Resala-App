import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { directions, SwappableElement } from 'src/app/classes/SwappingClass/swappable-element';

@Component({
  selector: 'app-volunteer-card',
  templateUrl: './volunteer-card.component.html',
  styleUrls: ['./volunteer-card.component.scss'],
})
export class VolunteerCardComponent implements OnInit, AfterViewInit {
  @ViewChild('volunteerCard', {read: ElementRef}) volunteerCard: ElementRef;
  
  swappableElement: SwappableElement = new SwappableElement();
  isSwapping: boolean = false;

  @Output() onSwap: EventEmitter<number> = new EventEmitter();
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.swappableElement.applySwapGesture(this.volunteerCard, directions.horizontal, 0.5, 0, -15);
    this.swappableElement.onSwapCompelete.subscribe((msg) => {
      this.onSwap.emit(1);
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

}
