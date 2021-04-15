import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CallStatus } from 'src/app/Enums/call-status.enum';
import InputProperties from '../../input/inputProperties';
import { CallProperties } from '../call-card/call-properties';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formTest = new FormGroup({
    inputTest: new FormControl('',[Validators.required])
  })
  inputTest:InputProperties = {
    placeHolder:"محمد مصطقي",
    type: "text",
    formGroup: this.formTest,
    formControlName: "inputTest",
    errorMessage: "اكتب اسمك ياض مش هقول تاني",
    label: "الاسم الجامد زوحليقة",
    disabled: true
  }

  callItem: CallProperties = {
    name:'',
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

  }

}
