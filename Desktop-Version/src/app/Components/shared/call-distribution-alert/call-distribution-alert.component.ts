import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';
import { CommitteeService } from 'src/app/services/committee.service';
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
  loading = true;
  constructor(public committeeService:CommitteeService, private eventsCRUD:EventsCRUDService) { 
    
  }
  WESelectBoxProperties: selectBoxProperties;
  vodafoneSelectBoxProperties: selectBoxProperties;
  orangeBoxProperties: selectBoxProperties;
  etisalatBoxProperties: selectBoxProperties;
  distributedButNotConfirmed = false;
  ngOnInit(): void {
    this.addNameToVolunteers();
    this.committeeService.getAssignedTeamForEvent(this.eventsCRUD.selectedEvent.id).subscribe((res:any)=>{
      let we, etisalat, orange, vodafone  = null;
      if (res.message.length != 0){
        this.distributedButNotConfirmed = true;
        res.message.forEach(element => {
          if (element.networkType.id == 4){
            we = element.volunteer.id;
          }
          if (element.networkType.id == 3){
            orange = element.volunteer.id;
          }
          if (element.networkType.id == 2){
            vodafone = element.volunteer.id;
          }
          if (element.networkType.id == 1){
            we = element.volunteer.id;
          }
        });
        this.initializeSelectBox(we || this.volunteers[0].id, vodafone || this.volunteers[0].id, etisalat || this.volunteers[0].id, orange || this.volunteers[0].id);
      } else {
        this.distributedButNotConfirmed = false;
        this.initializeSelectBox(this.volunteers[0].id, this.volunteers[0].id, this.volunteers[0].id, this.volunteers[0].id);
      }
      this.loading = false;
    })
  }
  addNameToVolunteers(){
    debugger;
    for (let i=0; i<this.committeeService.comitteeTeam.length; i++){
      this.volunteers[i] = this.committeeService.comitteeTeam[i]
      this.volunteers[i]['name'] = (this.committeeService.comitteeTeam[i].firstName.toString() + " " + this.committeeService.comitteeTeam[i].midName + " "+ this.committeeService.comitteeTeam[i].lastName)
    }
  }

  initializeSelectBox(weValue, vodafoneValue, etisalatValue, orangeValue){
    this.WESelectBoxProperties = {
      defaultValue: weValue,
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
      defaultValue: vodafoneValue,
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
      defaultValue: orangeValue,
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
      defaultValue: etisalatValue,
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

  close(){
    this.distributedButNotConfirmed = false;
    this.loading = true;
  }
  onSwtich(state){
    switch (state) {
      case 0:
        this.fairDistribute();
        break;
      case 1:
        this.normalDistribute();
        break;
      default:
        break;
    }
  }

  fairDistribute(){
    this.committeeService.distState = 0 //normal
  }

  normalDistribute(){
    this.committeeService.distState = 1 //fair
  }
}
