import { ChangeDetectorRef, ErrorHandler, Injectable } from '@angular/core';
import ResalaEvent from 'src/app/Domains/ResalaEvent/ResalaEvent';
import { GetAPILinksService } from 'src/app/services/get-apilinks.service';
import { RestfulAPIService } from 'src/app/services/RestfulAPI.service';
import EventsForm from 'src/app/SharedData/eventsForm';
import { EventFormMode } from './eventFormMode';
import *  as  FrontEndErrors from '../../SharedData/FrontEndErrors.json';
import { ErrorHandlerService } from '../alertHandler/alert-handler.service';
import { FormService } from 'src/app/Services/form.service';
import EventSummaryForm from 'src/app/SharedData/eventSummaryForm';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsCRUDService {
  nextEvents:ResalaEvent[];
  previousEvents:ResalaEvent[];
  nextSearchedEvents:any[] = [];
  previousSearchedEvents:any[] = [];
  gridState = 0;
  flipperStatus = false;
  selectedEvent:ResalaEvent;
  eventsForm:EventsForm = new EventsForm();
  summaryForm:EventSummaryForm = new EventSummaryForm();
  summaryFormDisplay = false;
  formMode:EventFormMode = EventFormMode.viewMode;
  constructor(private restfulAPI:RestfulAPIService, private formService:FormService, private getApiLinks:GetAPILinksService, private errorHandler:ErrorHandlerService, private route:Router) { 
  }

  getAllEvents(){
    return this.restfulAPI.getRequest(this.getApiLinks.getAllEvents());
  }

  getAllEventsByState(state){
    return this.restfulAPI.getRequest(this.getApiLinks.getAllEventsByState(state));
  }

  changeGridState(stateNumber){
    this.gridState = stateNumber;
  }


  getCurrentSelectedEvent(){
    return this.selectedEvent;
  }

  getEventFormMode(){
    return this.formMode;
  }

  handleGetAllEventsResponse(data){
    
  }

  handleGetAllEventsByStateResponse(data, state){
    if (data.message == null) return false;
    switch (state) {
      case 3:
        this.previousEvents = data.message;
        break;
      case 1:
        this.nextEvents = data.message;
        this.selectedEvent = this.nextEvents[0];
        break;
      default:
        break;
    }
  }
  
  changeSelectedEvent(event){
    this.selectedEvent = event;
    this.activateViewMode();
    this.initializeEventForm();
  }

  initializeEventForm(){
    switch (this.formMode) {
      case EventFormMode.viewMode:
        this.eventsForm.initializeViewForm(this.selectedEvent);
        break;
      case EventFormMode.editMode:
        this.eventsForm.initializeEditForm(this.selectedEvent);
        break;
      case EventFormMode.addMode:
        this.eventsForm.initializeAddForm();
        break;
      default:
        break;
    }
  }

  activateAddMode(){
    this.formMode = EventFormMode.addMode;
    this.initializeEventForm();
  }
  
  activateViewMode(){
    this.formMode = EventFormMode.viewMode;
    this.initializeEventForm();
  }
  
  showFlipper(){
    this.flipperStatus = true;  
    setTimeout(()=>{
      this.flipperStatus = false;
    }, 1000)
  }

  addEvent(){
    this.formService.markFormGroupTouched(this.eventsForm.eventsForm);
    if (this.eventsForm.eventsForm.invalid){
      this.errorHandler.handleError(FrontEndErrors.missingFields);
      return;
    } else {
      this.restfulAPI.postRequest(this.getApiLinks.getAddEvent(), [this.eventsForm.getEventObject()]).subscribe((res)=>{
        this.showFlipper();
        this.activateViewMode();
        this.route.navigate(['loading']);
      }, (msg)=>{
        this.errorHandler.handleError(msg);
      })
    }
  }

  showSummaryForm(){
    this.summaryForm.initializeForm(this.selectedEvent);
    this.summaryFormDisplay = true;
  }

  hideSummaryForm(){
    this.summaryFormDisplay = false;
  }

  activateEditMode(){
    this.formMode = EventFormMode.editMode;
    this.initializeEventForm();
  }

  editEvent(){
    this.formService.markFormGroupTouched(this.eventsForm.eventsForm);
    if (this.eventsForm.eventsForm.invalid){
      this.errorHandler.handleError(FrontEndErrors.missingFields);
      return;
    } else {
      this.restfulAPI.putRequest(this.getApiLinks.getEditEventLink(), this.eventsForm.getEventObject(this.selectedEvent.id)).subscribe((res)=>{
        this.showFlipper();
        this.activateViewMode();
        this.route.navigate(['loading']);
      }, (msg)=>{
        this.errorHandler.handleError(msg);
      })
    }
  }
  
  deleteEvent(){
    this.errorHandler.handleError(FrontEndErrors.archiveEventWarning, this.selectedEvent)
  }

  completeEvent(){
    this.restfulAPI.putRequest(this.getApiLinks.getEventCompleteLink(), {'id': this.selectedEvent.id}).subscribe(()=>{
      this.showFlipper();
      setTimeout(() => {
        this.route.navigate(['loading']);
      }, 1000);
    })
  }

  search(value){
    
    this.nextSearchedEvents = this.filterDataOnQuery(this.nextEvents, value);
    
    this.previousSearchedEvents = this.filterDataOnQuery(this.previousEvents, value);

  }

  filterDataOnQuery(events, query){
    let eventsFiltered = [];
    if (events.length == 0) return;
    events.forEach(element => {
      if (element.name.includes(query)){
        eventsFiltered.push(element);
      }
    });
    return eventsFiltered;
  }
}
