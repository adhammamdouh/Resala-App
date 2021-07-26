import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import selectBoxProperties from '../components/select-box/SelectBoxProperties';
import { ErrorHandlerService } from '../Controllers/alertHandler/alert-handler.service';
import { EventsCRUDService } from '../Controllers/eventHandler/events-crud.service';
import { GetAPILinksService } from './get-apilinks.service';
import { RestfulAPIService } from './RestfulAPI.service';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {
  showCalls= false;
  loading = true;
  distState = 0
  comitteeTeam = [];
  assignedCurrently = [];
  WESelectBoxProperties: selectBoxProperties;
  vodafoneSelectBoxProperties: selectBoxProperties;
  orangeBoxProperties: selectBoxProperties;
  etisalatBoxProperties: selectBoxProperties;
  distributedButNotConfirmed = false;
  eventFormGroup:FormGroup = new FormGroup({
    we: new FormControl(1),
    vodafone: new FormControl(1),
    orange: new FormControl(1),
    etisalat: new FormControl(1)
  })
  constructor(private restfulAPI:RestfulAPIService, private errorHandler:ErrorHandlerService, private getAPILinks:GetAPILinksService, private eventsCRUD:EventsCRUDService) { 
    this.addNameToVolunteers();
  }
  getMyTeam(){
    return this.restfulAPI.getRequest(this.getAPILinks.getCommitteTeamLink());
  }

  handleResponse(data){
    if (data.message == null) return [];
    this.comitteeTeam = data.message;
  }

  getAssignedTeamForEvent(id){
    return this.restfulAPI.getRequest(this.getAPILinks.getAssignedCallsForEvent(id));
  }

  getAssignedNetworkToEvents(){
    this.showCalls = true;
    this.loading = true;
    this.getAssignedTeamForEvent(this.eventsCRUD.selectedEvent.id).subscribe((res:any)=>{
      let we, etisalat, orange, vodafone  = null;
      if (res.message.length != 0){
        debugger;
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
        this.initializeSelectBox(we || this.comitteeTeam[0].id, vodafone || this.comitteeTeam[0].id, etisalat || this.comitteeTeam[0].id, orange || this.comitteeTeam[0].id);
      } else {
        this.distributedButNotConfirmed = false;
        this.initializeSelectBox(this.comitteeTeam[0].id, this.comitteeTeam[0].id, this.comitteeTeam[0].id, this.comitteeTeam[0].id);
      }
      this.loading = false;
    }, (err)=>{
      this.close()
      this.errorHandler.handleError(err);
    })
  }

  addNameToVolunteers(){
    debugger;
    for (let i=0; i<this.comitteeTeam.length; i++){
      this.comitteeTeam[i] = this.comitteeTeam[i]
      this.comitteeTeam[i]['name'] = (this.comitteeTeam[i].firstName.toString() + " " + this.comitteeTeam[i].midName + " "+ this.comitteeTeam[i].lastName)
    }
  }

  initializeSelectBox(weValue, vodafoneValue, etisalatValue, orangeValue){
    this.WESelectBoxProperties = {
      defaultValue: weValue,
      options: this.comitteeTeam,
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
      options: this.comitteeTeam,
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
      options: this.comitteeTeam,
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
      options: this.comitteeTeam,
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
    this.showCalls = false;
    this.distributedButNotConfirmed = false;
    this.loading = true;
  }

  submitCalls(){
    this.loading = true;
    let we = this.eventFormGroup.controls.we.value;
    let etisalat = this.eventFormGroup.controls.etisalat.value;
    let orange = this.eventFormGroup.controls.orange.value;
    let vodafone = this.eventFormGroup.controls.vodafone.value;
    let obj = {
      "event": {
        "id": this.eventsCRUD.selectedEvent.id
      },
      "networkAssignedToVolunteers":[
        {
          "networkType": {
            id: 1
          },
          "volunteer": {
            id: etisalat
          }
        },
        {
          "networkType": {
            id: 2
          },
          "volunteer": {
            id: vodafone
          }
        },
        {
          "networkType": {
            id: 3
          },
          "volunteer": {
            id: orange
          }
        },
        {
          "networkType": {
            id: 4
          },
          "volunteer": {
            id: we
          }
        }
      ]
    }
    this.restfulAPI.postRequest(this.getAPILinks.getNetworkAssignToVolunteer(), obj).subscribe((res)=>{
      this.loading = false;
      this.showCalls = false;
      setTimeout(()=>{
        this.eventsCRUD.showFlipper();
      }, 500)
    }, (err)=>{
      debugger;
      this.errorHandler.handleError(err);
    })
  }
  

  confirmAssign(){
    this.loading = true;
    this.restfulAPI.postRequest(this.getAPILinks.getConfirmAssign(this.distState), {"event": {"id":this.eventsCRUD.selectedEvent.id}}).subscribe(()=>{
      this.eventsCRUD.showFlipper();
      this.close();
    }, (err)=>{
      this.errorHandler.handleError(err);
      this.close()
    })
  }
}
