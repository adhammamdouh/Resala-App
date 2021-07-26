import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { Response } from 'src/app/domains/response';
import { FormGroup } from '@angular/forms';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { volunteerTabs } from 'src/app/pages/volunteers/volunteers.page';
import { AuthService } from '../AuthService/auth.service';
import { concat, forkJoin, from, interval, Observable, of } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

export enum Status {
  active = 1,
  archive = 2,
  requestToArchive = 3
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerCRUDService {
  public activeVolunteers: Volunteer[] = [];
  public inactiveVolunteers: Volunteer[] = [];
  public requestToVolunteers: Volunteer[] = []
  private volunteerList = [[], [], [], []];

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService,
              private auth: AuthService) { }

  refresh() {
    const ref = forkJoin({
      active: this.getActiveVolunteers(),
      inactive: this.getInactiveVolunteers(),
      requestToArchive: this.getRequestToArchiveVolunteers(),
    });
    return ref;
  }

  search(value) {
    this.completeSearch();

    for(let i = 0 ; i < this.activeVolunteers.length ; ++i) {
      const currentVolunteer = this.activeVolunteers[i];
      if(this.getVolunteerFullName(currentVolunteer).includes(value)) 
        this.volunteerList[Status.active].push(currentVolunteer);
      else if(currentVolunteer.branch.name.includes(value))
        this.volunteerList[Status.active].push(currentVolunteer);
    }

    for(let i = 0 ; i < this.inactiveVolunteers.length ; ++i) {
      const currentVolunteer = this.inactiveVolunteers[i];
      if(this.getVolunteerFullName(currentVolunteer).includes(value)) 
        this.volunteerList[Status.archive].push(currentVolunteer);
      else if(currentVolunteer.branch.name.includes(value))
        this.volunteerList[Status.archive].push(currentVolunteer);
    }

    for(let i = 0 ; i < this.requestToVolunteers.length ; ++i) {
      const currentVolunteer = this.requestToVolunteers[i];
      if(this.getVolunteerFullName(currentVolunteer).includes(value)) 
        this.volunteerList[Status.requestToArchive].push(currentVolunteer);
      else if(currentVolunteer.branch.name.includes(value))
        this.volunteerList[Status.requestToArchive].push(currentVolunteer);
    }
    return this.volunteerList;
  }

  completeSearch() {
    this.volunteerList = [[], [], [], []]
  }

  getVolunteerFullName(volunteer: Volunteer) {
    return volunteer.firstName + ' ' + volunteer.midName + ' ' + volunteer.lastName;
  }

  copyToActiveVolunteers(volunteers: Volunteer[]) {
    this.activeVolunteers = volunteers;
  }

  getActiveVolunteers() {
    if(!this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid()) { return of(null) };
    
    const url = service.baseUrl + 'volunteer/getAllByState/' + Status.active;
    return this.restfulAPI.get(url).pipe(
      take(1),
      map((msg: Response) => {
        this.activeVolunteers = msg.message
        return msg;
      })
    );
  }

  getInactiveVolunteers() {
    if(!this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid()) { return of(null) };
    const url = service.baseUrl + 'volunteer/getAllByState/' + Status.archive;

    return this.restfulAPI.get(url).pipe(
      take(1),
      map((msg: Response) => {
        this.inactiveVolunteers = msg.message
        return msg;
      })
    );
  }

  getRequestToArchiveVolunteers() {
    if(!this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid() && !this.privilegeHandler.isShowRequestToArchiveValid()) { return of(null) };

    const url = service.baseUrl + 'volunteer/getAllByState/' + Status.requestToArchive;
    return this.restfulAPI.get(url).pipe(
      take(1),
      map((msg: Response) => {
        this.requestToVolunteers = msg.message
        return msg;
      })
    );
  }

  async createVolunteer(form: FormGroup) {
    if(!this.privilegeHandler.isCreateVolunteerValid()) return of(null);

    const volunteer = this.generateVolunteerObjFromForm(form);
    const url = service.baseUrl + 'volunteer/add';

    
    const res = await this.restfulAPI.post(url, [volunteer]);

    return res;
  }

  async getVolunteerByPhoneNumber(phoneNumber: string) {
    //if(!this.privilegeHandler.isCreateVolunteerValid()) return;

    const url = service.baseUrl + 'volunteer/getByPhoneNumber';
    
    const res = await this.restfulAPI.post(url, { phoneNumber: phoneNumber });

    return res;
  }

  updateVolunteer(volunteer: Volunteer) {
    if(!this.privilegeHandler.isUpdateVolunteerValid()) return of(null);

    const url = service.baseUrl + 'volunteer/update';

    return this.restfulAPI.put(url, volunteer).pipe(
      take(1),
      map((msg: Response) => {
        return msg;
      })
    );
  }

  generateVolunteerObjFromForm(form: FormGroup) {
    let volunteer = {
      miniCamp: false,
      firstName: form.get('firstname').value,
      midName: form.get('middlename').value,
      lastName: form.get('lastname').value,
      nickName: form.get('nickName').value,
      birthDate: form.get('birthDate').value,
      nationalId:  form.get('nationalID').value,
      gender: form.get('gender').value,
      university: form.get('university').value,
      faculty: form.get('faculty').value,
      phoneNumber: form.get('phoneNumber').value,
      joinDate: form.get('joiningDate').value,
      shirt: {id: form.get('tShirt').value, name: ''},
      branch: {id: form.get('branch').value, name: ''},
      address: { 
                id: 0,
                apartmentNumber: form.get('apartmentNumber').value,
                buildingNumber: form.get('buildingNumber').value,
                streetName: form.get('streetName').value,
                regionName: form.get('neighborhoodName').value,
                additionalInfo: '',
                capital: { id: form.get('governorate').value, name: ''},
                },
      educationLevel: {
        id: form.get('educationLevel').value
      },
      comments: form.get('comments').value,
      }

    return volunteer;
  }

  async getMyCommitteeTeam() {
    const res = await this.restfulAPI.get( service.baseUrl 
                                            + 'leadVolunteer/getBranchCommitteeTeam');

    return res;
  }

  requestToArchiveVolunteer(volunteerId) {
    return this.restfulAPI.post(service.baseUrl + '/volunteer/requestToArchive', {id: volunteerId}).pipe(
      take(1),
      map((msg: Response) => {
        return msg;
      })
    )
  }

  acceptToArchiveVolunteer(volunteerId) {
    return this.restfulAPI.post(service.baseUrl + '/volunteer/acceptToArchive', {id: volunteerId}).pipe(
      take(1),
      map((msg: Response) => {
        return msg;
      })
    )
  }

  declineToArchiveVolunteer(volunteerId) {
    return this.restfulAPI.post(service.baseUrl + '/volunteer/declineToArchive', {id: volunteerId}).pipe(
      take(1),
      map((msg: Response) => {
        return msg;
      })
    )
  }

  activateVolunteer(volunteerId) {
    return this.restfulAPI.post(service.baseUrl + '/volunteer/activate', {id: volunteerId}).pipe(
      take(1),
      map((msg: Response) => {
        return msg;
      })
    )
  }
}
