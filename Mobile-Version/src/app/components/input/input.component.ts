import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormController } from '../form-controller';
import { InputProperties } from './input-properties';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() inputProperties: InputProperties;
  @Output() inputPropertiesChange: EventEmitter<InputProperties> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.inputProperties);
  }

  onChange() {
    this.inputPropertiesChange.emit(this.inputProperties);
  }

  isInvalidInput() {
    return this.inputProperties.formController.formGroup.get(this.inputProperties.formController.formControllerName).invalid;
  }

}
