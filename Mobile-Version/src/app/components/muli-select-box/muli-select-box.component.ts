import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import selectBoxProperties from '../select-box/selectBoxProperties';

@Component({
  selector: 'app-muli-select-box',
  templateUrl: './muli-select-box.component.html',
  styleUrls: ['./muli-select-box.component.scss'],
})
export class MuliSelectBoxComponent implements OnInit {
  @Input() selectBoxProperties:selectBoxProperties;
  @Output() selectBoxPropertiesChange: EventEmitter<selectBoxProperties> = new EventEmitter();
  
  customAlertOptions: any = {
    cssClass: 'alertContainer rightToLeft',
  };

  constructor() { }

  ngOnInit() {}

  isInvalidInput() {
    return this.selectBoxProperties.formController.formGroup.get(this.selectBoxProperties.formController.formControllerName).invalid;
  }
}
