import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import NetworkType from 'src/app/domains/Call/NetworkType';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';
import selectBoxProperties from '../select-box/selectBoxProperties';
import * as services from 'src/app/data/services.json';
import LeadVolunteer from 'src/app/domains/Volunteer/LeadVolunteer';
import SelectBoxOption from '../select-box/selectBoxOption';
import { networkType } from 'src/app/data/general-data.enum';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { Response } from 'src/app/domains/response';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { CallsCRUDService } from 'src/app/services/CallsCRUD/calls-crud.service';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-assign-calls',
  templateUrl: './assign-calls.component.html',
  styleUrls: ['./assign-calls.component.scss'],
})

/*
INSERT ignore INTO network_type (`id`, `name`) VALUES ('1', 'ETISALAT');
INSERT ignore INTO network_type (`id`, `name`) VALUES ('2', 'VODAFONE');
INSERT ignore INTO network_type (`id`, `name`) VALUES ('3', 'ORANGE');
INSERT ignore INTO network_type (`id`, `name`) VALUES ('4', 'WE');
*/

export class AssignCallsComponent implements OnInit {
  @Input() event: ResalaEvent;

  static networkCount = 4;
  myTeam: LeadVolunteer[] = null;
  preProcessingComplete: boolean = false;

  networkForm = new FormGroup({
    etisalat: new FormControl('', [Validators.required]),
    vodafone: new FormControl('', [Validators.required]),
    orange: new FormControl('', [Validators.required]),
    we: new FormControl('', [Validators.required])
  })

  networkTypes: NetworkType[] = [{
                                    id: 1,
                                    name: 'ASSIGN_CALLS.etisalat'
                                  },{
                                    id: 2,
                                    name: 'ASSIGN_CALLS.vodafone'
                                  },{
                                    id: 3,
                                    name: 'ASSIGN_CALLS.orange'
                                  },{
                                    id: 4,
                                    name: 'ASSIGN_CALLS.we'
                                  }];

  selectBoxes: selectBoxProperties[] = [{
                                          defaultValueIndex: 0,
                                          selectedItemValue: null,
                                          formController: {formGroup: this.networkForm, formControllerName: 'etisalat'},
                                          options: [{text: '', value: ''}],
                                          label: this.networkTypes[networkType.etisalat - 1].name
                                        },
                                        {
                                          defaultValueIndex: 0,
                                          selectedItemValue: null,
                                          formController: {formGroup: this.networkForm, formControllerName: 'vodafone'},
                                          options: [{text: '', value: ''}],
                                          label: this.networkTypes[networkType.vodafone - 1].name
                                        },
                                        {
                                          defaultValueIndex: 0,
                                          selectedItemValue: null,
                                          formController: {formGroup: this.networkForm, formControllerName: 'orange'},
                                          options: [{text: '', value: ''}],
                                          label: this.networkTypes[networkType.orange - 1].name
                                        },
                                        {
                                          defaultValueIndex: 0,
                                          selectedItemValue: null,
                                          formController: {formGroup: this.networkForm, formControllerName: 'we'},
                                          options: [{text: '', value: ''}],
                                          label: this.networkTypes[networkType.we - 1].name
                                        }]
  constructor(private restfulAPI: RestfulAPIHandlerService,
              private auth: AuthService,
              private volunteerCRUD: VolunteerCRUDService,
              private loading: LoadingHandlerService,
              private toast: ToastHandlerService,
              private callsCRUD: CallsCRUDService,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private translate: TranslateService) { }

  async ngOnInit() {
    await this.initializeComp();
  }

  async initializeComp() {
    await this.loading.presentLoading();
    await this.getMyCommitteeTeam();
  }

  async getMyCommitteeTeam() {
    const res = await this.volunteerCRUD.getMyCommitteeTeam();

    res.subscribe(async (res: Response) => {
      this.myTeam = res.message;
      const options = this.GenerateSelectBoxOptions(this.myTeam);
      this.fillSelectBoxOptions(options);

      await this.getNetworkAssignToVolunteer();

    }, async (res) => {
      await this.modalCtrl.dismiss();
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    });
  }

  async getNetworkAssignToVolunteer() {
    const res = await this.callsCRUD.getNetworksAssignedToVolunteers(this.event.id);

    res.subscribe(async (res: Response) => {
      if(res.message) {
        for(let i = 0; i < res.message.length ; ++i) {
          this.selectBoxes[res.message[i].networkType.id - 1].selectedItemValue = res.message[i].volunteer.id;
        }
      }

      this.preProcessingComplete = true;
      await this.loading.dismissLoading();
    }, async (res) => {
      await this.modalCtrl.dismiss();
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }

  async assignNetwork() {
    await this.loading.presentLoading();

    const res = await this.callsCRUD.assignNetwork(this.event.id, this.GenerateNetworkAssignedToVolunteer());

    res.subscribe(async (res: Response) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.message, ToastMode.success);

    }, async (res) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }

  GenerateNetworkAssignedToVolunteer() {
    let networkAssignedToVolunteers: {networkType: {id: number}, volunteer: {id: number}}[] = [];
    
    networkAssignedToVolunteers.push({networkType: {id: networkType.etisalat}, volunteer: {id: this.networkForm.controls['etisalat'].value}});
    networkAssignedToVolunteers.push({networkType: {id: networkType.vodafone}, volunteer: {id: this.networkForm.controls['vodafone'].value}});
    networkAssignedToVolunteers.push({networkType: {id: networkType.orange}, volunteer: {id: this.networkForm.controls['orange'].value}});
    networkAssignedToVolunteers.push({networkType: {id: networkType.we}, volunteer: {id: this.networkForm.controls['we'].value}});

    return networkAssignedToVolunteers;
  }

  GenerateSelectBoxOptions(myTeam: LeadVolunteer[]) {
    let options: SelectBoxOption[] = [];

    for(let i = 0; i < myTeam.length ; ++i) {
      const currentVolunteer = myTeam[i];
      options.push({
        text: currentVolunteer.firstName + ' ' + 
              currentVolunteer.midName + ' ' +
              currentVolunteer.lastName,
        value: currentVolunteer.id
      })
    }

    return options;
  }

  fillSelectBoxOptions(options: SelectBoxOption[]) {
    for(let i = 0 ; i < this.selectBoxes.length ; ++i) {
      this.selectBoxes[i].options = options;
    }
  }

  async confirmNetworkDistribution() {
    const alert = await this.alertController.create({
      cssClass: 'alertContainer rightToLeft',
      header: this.translate.instant('ASSIGN_CALLS.confirmDistribute'),
      message: this.translate.instant('ASSIGN_CALLS.warning'),
      mode: 'ios',
      inputs: [
        {
          name: 'equallyDistributed',
          type: 'checkbox',
          label: this.translate.instant('ASSIGN_CALLS.equallyDistributed'),
          value: true,
        }
      ],
      buttons: [
        {
          text: this.translate.instant('ASSIGN_CALLS.cancel'),
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: this.translate.instant('ASSIGN_CALLS.distribute'),
          handler: async (data) => {
            await this.loading.presentLoading();
            const res = await this.callsCRUD.confirmAssignedNetworks((data[0] ? 1 : 0), this.event.id);
            this.handleConfirmSubscription(res);
          }
        }
      ]
    });
    await alert.present();
  }

  handleConfirmSubscription(res) {
    res.subscribe(async (res: Response) => {

      await this.loading.dismissLoading();
      await this.toast.presentToast(res.message, ToastMode.success);
    }, async (res) => {

      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }
}
