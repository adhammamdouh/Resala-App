import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';
import selectBoxProperties from '../../select-box/SelectBoxProperties';

@Component({
  selector: 'app-call-distribution-alert',
  templateUrl: './call-distribution-alert.component.html',
  styleUrls: ['./call-distribution-alert.component.scss']
})
export class CallDistributionAlertComponent implements OnInit {
  volunteers:any[] = [];
  eventFormGroup:FormGroup = new FormGroup({
    we: new FormControl(1),
    vodafone: new FormControl(1),
    orange: new FormControl(1),
    etisalat: new FormControl(1)
  })
  constructor(public volunteersCRUD: VolunteersCRUD) { 
    this.volunteers = volunteersCRUD.activeVolunteers;
    this.addNameToVolunteers();
    this.WESelectBoxProperties = {
      defaultValue: this.eventFormGroup.controls['we'].value,
      options: this.volunteers,
      label: 'وي',
      formControlName: 'we',
      formGroup: this.eventFormGroup,
      disabled:false,
      objectDefine: {
        text: 'name',
        value: 'id'
      }
    }
    this.vodafoneSelectBoxProperties = {
      defaultValue: this.eventFormGroup.controls['vodafone'].value,
      options: this.volunteers,
      label: 'فودافون',
      formControlName: 'vodafone',
      formGroup: this.eventFormGroup,
      disabled:false,
      objectDefine: {
        text: 'name',
        value: 'id'
      }
    }
    this.orangeBoxProperties = {
      defaultValue: this.eventFormGroup.controls['orange'].value,
      options: this.volunteers,
      label: 'اورنج',
      formControlName: 'orange',
      formGroup: this.eventFormGroup,
      disabled:false,
      objectDefine: {
        text: 'name',
        value: 'id'
      }
    }
    this.etisalatBoxProperties = {
      defaultValue: this.eventFormGroup.controls['etisalat'].value,
      options: this.volunteers,
      label: 'اتصالات',
      formControlName: 'etisalat',
      formGroup: this.eventFormGroup,
      disabled:false,
      objectDefine: {
        text: 'name',
        value: 'id'
      }
    }
    
  }
  WESelectBoxProperties: selectBoxProperties;
  vodafoneSelectBoxProperties: selectBoxProperties;
  orangeBoxProperties: selectBoxProperties;
  etisalatBoxProperties: selectBoxProperties;
  ngOnInit(): void {
    
  }
  addNameToVolunteers(){
    for (let i=0; i<this.volunteersCRUD.activeVolunteers.length; i++){
      this.volunteers[i] = this.volunteersCRUD.activeVolunteers[i]
      this.volunteers[i]['name'] = (this.volunteersCRUD.activeVolunteers[i].firstName.toString() + this.volunteersCRUD.activeVolunteers[i].midName + this.volunteersCRUD.activeVolunteers[i].lastName)
    }
  }
}
