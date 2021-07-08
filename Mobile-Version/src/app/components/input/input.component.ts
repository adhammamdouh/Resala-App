import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputProperties } from './input-properties';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() inputProperties: InputProperties = {placeholder: '', value: '', iconSrc: '', title: ''};
  @Output() inputPropertiesChange: EventEmitter<InputProperties> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onChange() {
    this.inputPropertiesChange.emit(this.inputProperties);
  }

}
