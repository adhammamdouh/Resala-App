import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ErrorHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';
import { VolunteerFormMode } from 'src/app/Controllers/volunteerHandler/volunteerFormMode';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';
import VolunteerForm from '../../../SharedData/volunteerForm'


@Component({
  selector: 'app-volunteers-form',
  templateUrl: './volunteers-form.component.html',
  styleUrls: ['./volunteers-form.component.scss']
})
export class VolunteersFormComponent implements OnInit {

  constructor(public volunteersCRUD: VolunteersCRUD, 
    public errorHandler:ErrorHandlerService,
    public privilegeHandler:PrivilegeHandlerService) { }

  ngOnInit(): void {
    this.enablePopUps();
    this.volunteersCRUD.initializeVolunteerForm()
  }

  enablePopUps() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }
  
}


