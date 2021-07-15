import { Component, OnInit } from '@angular/core';
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
  searchStatus = SearchStatus;

  volunteerFound = SearchStatus.init;

  phoneNumber: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                          value: '', 
                          iconSrc: '', 
                          title: 'EVENT_ATTENDANCE.phoneNumber', 
                          hasIcon: false, 
                          type: 'number',
                          disabled: false,
                          formController: null};
  constructor() { }

  ngOnInit() {
  }

  searchVolunteerByPhoneNumber() {
    this.volunteerFound = this.searchStatus.init;
  }

}
