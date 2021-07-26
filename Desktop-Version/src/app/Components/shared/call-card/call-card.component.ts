import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import { CallStatus } from 'src/app/Enums/call-status.enum';
import { GetAPILinksService } from 'src/app/services/get-apilinks.service';
import { RestfulAPIService } from 'src/app/services/RestfulAPI.service';
import InputProperties from '../../input/inputProperties';
import selectBoxProperties from '../../select-box/SelectBoxProperties';
import { CallProperties } from './call-properties';

@Component({
  selector: 'app-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss']
})
export class CallCardComponent implements OnInit {
  callStatus = CallStatus;
  completed:any = false;
  cardStatus: CallStatus = CallStatus.active;
  isSubmitting: boolean = false;
  @Input() call;
  @Input() index;
  @Input() total;

  
  callForm:FormGroup = new FormGroup({
    callResult: new FormControl(1),
    comments: new FormControl('', [Validators.required])
  })

  callResult:selectBoxProperties = {
    defaultValue: this.callForm.controls.callResult.value,
    options: [
      {
        'name': 'أكد',
        'id': '1'
      },
      {
        'name': 'احتمال',
        'id': '2'
      },
      {
        'name': 'رفض',
        'id': '3'
      },
      {
        'name': 'لم يرد',
        'id': '4'
      },
      {
        'name': 'الرقم غلط',
        'id': '5'
      },
      {
        'name': 'مغلق',
        'id': '6'
      },
      {
        'name': 'غير متاح',
        'id': '7'
      },
      {
        'name': 'اول مرة',
        'id': '8'
      }

    ],
    label: 'نتيجة المكالمة',
    formControlName: 'callResult',
    formGroup: this.callForm,
    disabled: false,
    objectDefine: {
      text: "name",
      value: "id"
    }
  }
  
  comments:InputProperties = {
    type: "text",
    label: "الملاحظات",
    errorMessage: "برجاء التأكد من الملاحظات",
    placeHolder: "الملاحظات",
    formGroup: this.callForm,
    formControlName: 'comments',
    disabled: false
  }

  constructor(private restfulAPI:RestfulAPIService, private getApILINKS:GetAPILinksService, public eventsCrud:EventsCRUDService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  } 


  initializeForm(){
    if (this.call.callType.id == 1)
    this.callForm = new FormGroup({
      callResult: new FormControl(this.call.invitationCallResult || 1),
      comments: new FormControl(this.call.invitationComment || '', [Validators.required])
    })
    
    if (this.call.callType.id == 2)
    this.callForm = new FormGroup({
      callResult: new FormControl(this.call.feedBackCallResult || 2),
      comments: new FormControl(this.call.feedBackComment || '' , [Validators.required])
    })
    
    if (this.call.callType.id == 3)
    this.callForm = new FormGroup({
      callResult: new FormControl(this.call.notAttendCallResult || 3),
      comments: new FormControl(this.call.notAttendComment || '', [Validators.required])
    })
    if (this.call.feedBackComment || this.call.notAttendComment || this.call.invitationComment) this.completed = true;
    
    this.callResult = {
      defaultValue: this.callForm.controls.callResult.value,
      options: [
        {
          'name': 'أكد',
          'id': '1'
        },
        {
          'name': 'احتمال',
          'id': '2'
        },
        {
          'name': 'رفض',
          'id': '3'
        },
        {
          'name': 'لم يرد',
          'id': '4'
        },
        {
          'name': 'الرقم غلط',
          'id': '5'
        },
        {
          'name': 'مغلق',
          'id': '6'
        },
        {
          'name': 'غير متاح',
          'id': '7'
        },
        {
          'name': 'اول مرة',
          'id': '8'
        }
  
      ],
      label: 'نتيجة المكالمة',
      formControlName: 'callResult',
      formGroup: this.callForm,
      disabled: this.eventsCrud.gridState == 1,
      objectDefine: {
        text: "name",
        value: "id"
      }
    }
    this.comments = {
      type: "text",
      label: "الملاحظات",
      errorMessage: "برجاء التأكد من الملاحظات",
      placeHolder: "الملاحظات",
      formGroup: this.callForm,
      formControlName: 'comments',
      disabled: this.eventsCrud.gridState == 1
    } 
  }


  sumbitCall(){
    debugger;
    this.isSubmitting = true;
    let obj = {
      "callId":this.call.id,
      "comment":this.callForm.controls.comments.value,
      "callResult":{
          "id":this.callForm.controls.callResult.value
      }
    }
    this.restfulAPI.postRequest(this.getApILINKS.getSubmitEventCallResult(), obj).subscribe(()=>{
      this.isSubmitting = false;
      this.completed = true;
    }, (err)=>{
      console.log(err);
    })
  }
  
}
