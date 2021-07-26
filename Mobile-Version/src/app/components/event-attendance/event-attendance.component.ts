import { Component, Input, OnInit } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { Response } from 'src/app/domains/response';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { EventCRUDService } from 'src/app/services/EventCRUD/event-crud.service';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';
import { InputProperties } from '../input/input-properties';

export enum SearchStatus {
  init = 0,
  found = 1,
  notFound = 2,
}

@Component({
  selector: 'app-event-attendance',
  templateUrl: './event-attendance.component.html',
  styleUrls: ['./event-attendance.component.scss'],
})

export class EventAttendanceComponent implements OnInit {
  @Input() event: ResalaEvent;
  
  searchStatus = SearchStatus;
  searchedVolunteer: Volunteer = null;
  volunteerFound = SearchStatus.init;

  phoneNumber: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                          value: '', 
                          iconSrc: '', 
                          title: 'EVENT_ATTENDANCE.phoneNumber', 
                          hasIcon: false, 
                          type: 'number',
                          disabled: false,
                          formController: null};

  constructor(private volunteerCRUD: VolunteerCRUDService,
              private loading: LoadingHandlerService,
              private eventCRUD: EventCRUDService,
              private auth: AuthService,
              private toast: ToastHandlerService) { }

  ngOnInit() {
  }

  async searchVolunteerByPhoneNumber() {
    await this.loading.presentLoading();
    
    this.volunteerFound = SearchStatus.init;
    this.searchedVolunteer = null;
    
    const res = await this.volunteerCRUD.getVolunteerByPhoneNumber(this.phoneNumber.value);

    res.subscribe(async (res: Response) => {
      this.volunteerFound = SearchStatus.found;
      this.searchedVolunteer = res.message;
      await this.loading.dismissLoading();
    }, 
    async (res) => {
      this.volunteerFound = SearchStatus.notFound;
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail)
    })
  }

  async submitVolunteerAttendance() {
    await this.loading.presentLoading();
    
    const res = await this.eventCRUD.makeAttendance(this.searchedVolunteer.id, this.auth.getUser().myBranch, this.event.id);
    res.subscribe(async (res: Response) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.message, ToastMode.success)
    }, async (res) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail)
    })
  }

}
