import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-state-bar',
  templateUrl: './state-bar.component.html',
  styleUrls: ['./state-bar.component.scss']
})
export class StateBarComponent implements OnInit{
  @Input() states:any = [];
  @Input() activeInput;
  active:number;
  @Output() switchingState = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.active = this.activeInput;
  }

  changeState(state){
    this.active = state;
    this.switchingState.emit(state);
  }
}
