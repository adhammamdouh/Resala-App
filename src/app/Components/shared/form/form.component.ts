import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import InputProperties from '../../input/inputProperties';

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
  constructor() { }

  ngOnInit(): void {
    
  }

}
