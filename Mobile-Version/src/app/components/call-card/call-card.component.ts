import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { directions, SwappableElement } from 'src/app/classes/SwappingClass/swappable-element';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { InputProperties } from '../input/input-properties';
import selectBoxProperties from '../select-box/selectBoxProperties';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CallTypes } from './call-type.enum';
import { CallProperties } from './call-properties';
import { CallStatus } from './call-status.enum';
import { options } from 'src/app/data/general-data.enum';
import Calls from 'src/app/domains/Call/Calls';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { CallsCRUDService } from 'src/app/services/CallsCRUD/calls-crud.service';
import { Response } from 'src/app/domains/response';

@Component({
  selector: 'app-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss'],
})
export class CallCardComponent implements OnInit, AfterViewInit {
  callType = CallTypes;
  callStatus = CallStatus;

  @ViewChild('callCard', {read: ElementRef}) btn: ElementRef;
  @Input() call: Calls;

  swappableElement: SwappableElement = new SwappableElement();

  showLoading: boolean = false;
  show = false;

  callForm = new FormGroup({
    callResult: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
  })
  
  callResultProperties: selectBoxProperties = {label: 'CALLCARD.callResult',
                                                defaultValueIndex: 0,
                                                selectedItemValue: null,
                                                options: options.callResults,
                                                formController: {formGroup: this.callForm, formControllerName: 'callResult'}};

  notesProperties: InputProperties = {placeholder: 'PLACEHOLDER.typeHere',
                                      value: '',
                                      iconSrc: '',
                                      title: 'CALLCARD.notes',
                                      hasIcon: false,
                                      type: '',
                                      disabled: false,
                                      formController: {formGroup: this.callForm, formControllerName: 'comment'}};

  constructor(private alertHandler: AlertHandlerService,
              private callNumber: CallNumber,
              private clipboard: Clipboard,
              private toastCtrl: ToastController,
              private translate: TranslateService,
              private cd: ChangeDetectorRef,
              private toast: ToastHandlerService,
              private callsCRUD: CallsCRUDService) { }
  

  ngOnInit() {
    this.initiateFormValues();
  }

  ngAfterViewInit() {
    this.swappableElement.applySwapGesture(this.btn, directions.horizontal, 0.5, 0, -44, false);
  }

  initiateFormValues() {
    switch(this.call.callType.id) {
      case this.callType.invitation:
        this.callResultProperties.selectedItemValue = this.call.invitationCallResult.id;
        this.callForm.controls['comment'].setValue(this.call.invitationComment);
        break;
      case this.callType.feedback:
        this.callResultProperties.selectedItemValue = this.call.feedBackCallResult.id;
        this.callForm.controls['comment'].setValue(this.call.feedBackComment);
        break;
      case this.callType.acceptNotAttend:
        this.callResultProperties.selectedItemValue = this.call.notAttendCallResult.id;
        this.callForm.controls['comment'].setValue(this.call.notAttendComment);
        break;
    }
  }

  callVolunteer(phoneNumber) {
    this.callNumber.callNumber(phoneNumber, true)
    .then(res => this.alertHandler.displayAlert("yes"))
    .catch(err => this.alertHandler.displayAlert("no"));
  }

  copyToClipboard(phoneNumber) {
    this.clipboard.copy(phoneNumber).then(async () => { await this.toast.presentToast(phoneNumber + ' ' + this.translate.instant('COPIDEDTOCLIPBOARD'), ToastMode.success)})
  } 

  async onSubmit() {
    this.controlLoading(true)
    const res = await this.callsCRUD.submitCall(this.call.id, this.call.callType, this.callForm.controls['callResult'].value, this.callForm.controls['comment'].value);
    
    res.subscribe(async (res: Response) => {
      this.controlLoading(false);
      this.call.completed = true;
      await this.toast.presentToast(res.message, ToastMode.success)
    }, async (res) => {
      this.controlLoading(false);
      await this.toast.presentToast(res.error.error, ToastMode.fail)
    })
  }

  onEdit() {

  }

  controlLoading(show: boolean) {
    this.showLoading = show;
  }

  close() {
    this.show = !this.show;
    
  }

  showclose() {
    this.show = !this.show;
  }
}
