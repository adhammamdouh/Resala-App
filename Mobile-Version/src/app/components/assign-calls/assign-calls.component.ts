import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import NetworkType from 'src/app/domains/Call/NetworkType';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';
import selectBoxProperties from '../select-box/selectBoxProperties';
import * as services from 'src/app/data/services.json';
import LeadVolunteer from 'src/app/domains/Volunteer/LeadVolunteer';
import SelectBoxOption from '../select-box/selectBoxOption';
import { networkType } from 'src/app/data/general-data.enum';

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
  static networkCount = 4;

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
  constructor(private restfulAPI: RestfulAPIHandlerService) { }

  async ngOnInit() {
    await this.getMyCommitteeTeam();
  }

  async initializeComp() {
  }

  async getMyCommitteeTeam() {
    const res = await this.restfulAPI.get( services.baseUrl +  '/leadVolunteer/getCommitteeTeam/1/1');
    res.subscribe((res) => {
      console.log(res);
    })
  }

  fillSelectBoxOptions(myTeam: LeadVolunteer[]) {
    let options: SelectBoxOption[] = [];

    for(let i = 0; i < myTeam.length ; ++i) {
      const currentVolunteer = myTeam[i];
      options.push({
        text: currentVolunteer.myVolunteerInfo.firstName + ' ' + 
              currentVolunteer.myVolunteerInfo.midName + ' ' +
              currentVolunteer.myVolunteerInfo.lastName,
        value: currentVolunteer.myVolunteerInfo.id
      })
    }
  }



}
