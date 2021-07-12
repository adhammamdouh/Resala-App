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
import { CallType } from './call-type.enum';
import { CallProperties } from './call-properties';
import { CallStatus } from './call-status.enum';
import { options } from 'src/app/data/general-data.enum';

@Component({
  selector: 'app-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss'],
})
export class CallCardComponent implements OnInit, AfterViewInit {
  callType = CallType;
  callStatus = CallStatus;

  @ViewChild('callCard', {read: ElementRef}) btn: ElementRef;
  @Input() callProperties: CallProperties = {id: 0, callType: CallType.invitation, status: CallStatus.active};

  swappableElement: SwappableElement = new SwappableElement();
  notesProperties: InputProperties = {placeholder: '',
                                      value: '',
                                      iconSrc: '',
                                      title: 'CALLCARD.notes',
                                      hasIcon: false,
                                      type: '',
                                      disabled: false,
                                      formController: null}
  showLoading: boolean = false;
  show = false;

  formTest = new FormGroup({
    sex: new FormControl('', [Validators.required])
  })
  inputTest: selectBoxProperties = {
    label: 'النوع',
    defaultValueIndex: 0,
    selectedItemValue: null,
    options: options.gender,
    formController: {formGroup: this.formTest, formControllerName: 'gender'}
  };
  
  constructor(private alertHandler: AlertHandlerService,
              private callNumber: CallNumber,
              private clipboard: Clipboard,
              private toastCtrl: ToastController,
              private translate: TranslateService,
              private cd: ChangeDetectorRef) { }
  

  ngOnInit() {}

  ngAfterViewInit() {
    this.swappableElement.applySwapGesture(this.btn, directions.horizontal, 0.5, 0, -44, false);
    /*this.swappableElement.onSwapCompelete.subscribe((msg: boolean) => {
      this.swapCompleted.emit(msg);
    })*/
  }

  callVolunteer() {
    this.callNumber.callNumber("01100024081", true)
    .then(res => this.alertHandler.displayAlert("yes"))
    .catch(err => this.alertHandler.displayAlert("no"));
  }

  copyToClipboard() {
    //this.showCopyConfirmationToast()
    this.clipboard.copy('01100024081').then(async () => { await this.showCopyConfirmationToast()})
  } 
  
  async showCopyConfirmationToast() {
    const toast = await this.toastCtrl.create({
      message: '01100024081' + ' ' + this.translate.instant('COPIDEDTOCLIPBOARD'),
      duration: 1000,
      mode: 'ios',
      cssClass: 'toastModal',
    });

    toast.present();
  }

  onSubmit() {
    this.controlLoading(true)
    setTimeout(() => 
    {
        this.callProperties.status = this.callStatus.submitted;
        this.controlLoading(false);
    },
    5000);
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
