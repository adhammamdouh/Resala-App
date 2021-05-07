import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CallStatus } from 'src/app/Enums/call-status.enum';
import InputProperties from '../../input/inputProperties';
import selectBoxProperties from '../../select-box/SelectBoxProperties';
import { CallProperties } from '../call-card/call-properties';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formTest = new FormGroup({
    sex: new FormControl('', [Validators.required])
  })

  inputTest: selectBoxProperties = {
    label: 'النوع',
    defaultValueIndex: 0,
    options: [
      {
        text: 'ذكر',
        value: 'male'
      },
      {
        text: 'انثي',
        value: 'female'
      }
    ],
    formControlName: 'sex',
    formGroup: this.formTest
  };

  callItem: CallProperties = {
    name: '',
    birthDate: new Date(),
    callNumber: 1,
    callStatus: CallStatus.active,
    totalCallsCount: 1,
    callResult: '',
    eventAttend: '',
    notes: '',
    phoneNumber: '',
  }
  constructor() { }

  ngOnInit(): void {
    this.enablePopUps();
  }

  enablePopUps(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }
}
