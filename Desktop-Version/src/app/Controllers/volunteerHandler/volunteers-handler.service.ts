import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';
import { FormService } from 'src/app/Services/form.service';
import { GetAPILinksService } from 'src/app/services/get-apilinks.service';
import { RestfulAPIService } from 'src/app/services/RestfulAPI.service';
import VolunteerForm from 'src/app/SharedData/volunteerForm';
import { ErrorHandlerService } from '../alertHandler/alert-handler.service';
import { VolunteerFormMode } from './volunteerFormMode';
import *  as  FrontEndErrors from '../../SharedData/FrontEndErrors.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolunteersCRUD {
  flipperStatus = false;
  activeVolunteers:Volunteer[];
  archivedVolunteers:Volunteer[];
  requestedToBeArchivedVolunteers:Volunteer[];
  gridState = 0;
  selectedVolunteer:Volunteer;
  volunteerForm:VolunteerForm = new VolunteerForm();
  formMode:VolunteerFormMode = VolunteerFormMode.viewMode;
  
  constructor(private restfulAPI:RestfulAPIService, private getApiLinks:GetAPILinksService, private formService:FormService, private errorHandler:ErrorHandlerService, private route:Router) { 
    
  }
  
  handleGetActiveVoluneersByBranchResponse(data){
    this.activeVolunteers = data.message;
    this.selectedVolunteer = this.activeVolunteers[0];
  }
  
  getActiveVoluneersByBranch(){
    return this.restfulAPI.getRequest(this.getApiLinks.getAllVolunteerByBranchLink(1))
  }

  getVolunteersByState(state){
    return this.restfulAPI.getRequest(this.getApiLinks.getVolunteersByState(state));
  }

  handleGetVolunteersByStateResponse(data,state){
    if (data.message == null) return false;
    switch (state) {
      case 2:
        this.archivedVolunteers = data.message;
        break;
      case 1:
        this.activeVolunteers = data.message;
        this.selectedVolunteer = this.activeVolunteers[0];
        break;
      case 3:
        this.requestedToBeArchivedVolunteers = data.message;
        break;
      default:
        break;
    }
  }

  changeGridState(stateNumber){
    this.gridState = stateNumber;
  }

  changeSelectedVolunteer(volunteer){
    this.selectedVolunteer = volunteer;
    this.initializeVolunteerForm();
    this.activateViewMode();
  }

  getCurrentSelectedVolunteer(){
    return this.selectedVolunteer;
  }

  getVolunteerFormMode(){
    return this.formMode;
  }

  initializeVolunteerForm(){
    switch (this.formMode) {
      case VolunteerFormMode.viewMode:
        this.volunteerForm.initializeViewForm(this.selectedVolunteer);
        break;
      case VolunteerFormMode.editMode:
        this.volunteerForm.initializeEditForm(this.selectedVolunteer);
        break;
      case VolunteerFormMode.addMode:
        this.volunteerForm.initializeAddForm();
        break;
      default:
        break;
    }
  }
  
  activateAddMode(){
    this.formMode = VolunteerFormMode.addMode;
    this.initializeVolunteerForm();
  }

  activateViewMode(){
    this.formMode = VolunteerFormMode.viewMode;
    this.initializeVolunteerForm();
  }
  
  showFlipper(){
    this.flipperStatus = true;  
    setTimeout(()=>{
      this.flipperStatus = false;
    }, 1000)
  }

  requestArchive(){
    this.errorHandler.handleError(FrontEndErrors.archiveVolunteerWarning, this.selectedVolunteer)
  }
  
  addVolunteer(){
    this.formService.markFormGroupTouched(this.volunteerForm.volunteerForm);
    if (this.volunteerForm.volunteerForm.invalid){
      this.errorHandler.handleError(FrontEndErrors.missingFields);
      return;
    }
    let volunteer:Volunteer  = this.volunteerForm.getVolunteerObject();
    this.restfulAPI.postRequest(this.getApiLinks.getAddVolunteer(), [volunteer]).subscribe(()=>{
      this.showFlipper();
      this.formMode = 2;
      this.initializeVolunteerForm();
      setTimeout(()=>{
        this.route.navigate(['loading']);
      }, 1000)
    }, (err)=>{
      this.errorHandler.handleError(err);
    })
  }

  activateEditMode(){
    this.formMode = VolunteerFormMode.editMode;
    this.initializeVolunteerForm();
  }

  editVolunteer(){
    this.formService.markFormGroupTouched(this.volunteerForm.volunteerForm);
    if (this.volunteerForm.volunteerForm.invalid){
      this.errorHandler.handleError(FrontEndErrors.missingFields);
      return;
    }
    this.restfulAPI.putRequest(this.getApiLinks.getEditVolunteerLink(), this.volunteerForm.getVolunteerObject(this.selectedVolunteer.id)).subscribe(()=>{
      this.showFlipper();
      setTimeout(()=>{
        this.activateViewMode()
        this.route.navigate(['loading'])
      }, 1000)
    }, (err)=>{
      this.errorHandler.handleError(err);
    });
  }

  activateVolunteer(){
    this.errorHandler.handleError(FrontEndErrors.activateVolunteerWarning, this.selectedVolunteer);
  }
}
