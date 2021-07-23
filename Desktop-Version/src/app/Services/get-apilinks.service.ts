import { Injectable } from '@angular/core';
import  *  as  APILinks  from  '../sharedData/APILinks.json';
@Injectable({
  providedIn: 'root'
})
export class GetAPILinksService {
  constructor() { }
  
  getLoginLink():string{
    return APILinks.baseURL+APILinks.login;
  }

  getAllVolunteersLink():string{
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.getAll;
  }

  getAllVolunteerByBranchLink(branchID):string{
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.getAllByBranch + branchID;
  }
  
  getAllEvents(){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.getAll;
  }

  getAllEventsByState(state){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.getAllByState + state;
  }

  getVolunteersByState(state){
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.getAllByState + state;
  }

  getAddEvent(){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.addEvent;
  }

  getRequestArchiveVolunteerLink(){
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.requestToArchive;
  }

  getAddVolunteer(){
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.add;
  }

  getEditVolunteerLink(){
    return APILinks.baseURL + APILinks.volunteer.volunteer + APILinks.volunteer.update
  }

  getEditEventLink(){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.updateEvent;
  }
  
  getDeleteEventLink(){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.archiveEvent;
  }

  getEventCompleteLink(){
    return APILinks.baseURL + APILinks.event.event + APILinks.event.completeEvent;
  }
}
