import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputProperties } from '../input/input-properties';
import { DateTimeProperties } from './date-time-properties';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  @Input() dateTimeProperties: DateTimeProperties;
  @Output() dateTimePropertiesChange: EventEmitter<DateTimeProperties> = new EventEmitter();

  customPickerOptions: any = {
    cssClass: 'pickerContainer',
  };

  constructor() { }

  ngOnInit() {}

  isInvalidInput() {
    return this.dateTimeProperties.formController.formGroup.get(this.dateTimeProperties.formController.formControllerName).invalid;
  }
}
