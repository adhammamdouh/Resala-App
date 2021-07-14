import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { Response } from 'src/app/domains/response';
import { FormGroup } from '@angular/forms';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';

export enum Status {
  active = 1,
  archive = 2,
  requestToArchive = 3
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerCRUDService {
  public volunteers: Volunteer[] = [];
  private volunteersTemp: Volunteer[] = [];

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService) { }

  async refresh(event = null) {
    this.getActiveVolunteers(event);
  }

  search(value, complete = false) {
    if(complete) this.volunteers = this.volunteersTemp;
    
    else {
      this.volunteers = [];
      for(let i = 0 ; i < this.volunteersTemp.length ; ++i) {
        const currentVolunteer = this.volunteersTemp[i];
        if(this.getVolunteerFullName(currentVolunteer).includes(value)) 
          this.volunteers.push(currentVolunteer);
        else if(currentVolunteer.branch.name.includes(value))
          this.volunteers.push(currentVolunteer);
      }
    }
  }

  getVolunteerFullName(volunteer: Volunteer) {
    return volunteer.firstName + ' ' + volunteer.midName + ' ' + volunteer.lastName;
  }

  async getActiveVolunteers(event = null) {
    const url = service.baseUrl + 'volunteer/getAllByBranch/1'
      //(this.privilegeHandler.isGetByStatusPrivilegeValid() ? 'volunteer/getAllByBranch/1' : '');
    //console.log(url)
      //+ '/' + Status.active;
    const res = await this.restfulAPI.get(url);

    res.subscribe((res: Response) => {
      this.volunteersTemp = this.volunteers = res.message;
      console.log(this.volunteers);

      //if refreshing complete it.
      if(event) event.target.complete();
    })
  }

  async createVolunteer(form: FormGroup) {

  }

  generateVolunteerObjFromForm(form: FormGroup) {
    let volunteer: Volunteer = {
      id: 0,
      networkType: {id: 0, name: ''},
      role: {id: 0, name: '',},
      privileges: [{id: 0, name: '', actions: [{id: 0, name: ''}]}],
      user: {password: '', username: ''},
      miniCamp: null,
      volunteerKPI: {id: 0, callsCount: 0, presentCount: 0,ensureCount: 0, responseCount: 0},
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
      tShirt: form.get('tShirt').value,
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
      
      }

    console.log(volunteer);
  }
}
