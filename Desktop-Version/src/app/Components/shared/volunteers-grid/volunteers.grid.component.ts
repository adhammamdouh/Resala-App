import { Component, Input, OnInit } from '@angular/core';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';

@Component({
  selector: 'app-volunteers-grid',
  templateUrl: './volunteers.grid.component.html',
  styleUrls: ['./volunteers.grid.component.scss']
})
export class VolunteersGridComponent implements OnInit {
  statesText = []
  searchMode = false;
  constructor(public volunteersCRUD:VolunteersCRUD, public privilegeHandler:PrivilegeHandlerService) { }
  ngOnInit(): void {
    if (this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid()){
      this.statesText.push('نشط');
      this.statesText.push('غير نشط');
      if (this.privilegeHandler.isShowRequestToArchiveValid()){
        this.statesText.push('طلب ارشيف')
      }
    }
  }

  onSwitchingState(state){
    switch (state) {
      case 0:
        this.firstState();
        break;
      case 1:
        this.secondState();
        break;
      case 2:
        this.thirdState();
        break;
      default:
        break;
    }
  }

  firstState(){
    //Active Volunteers
    this.volunteersCRUD.changeGridState(0)
    if(this.volunteersCRUD.activeVolunteers != undefined){
      this.volunteersCRUD.formMode = 2;
      this.volunteersCRUD.selectedVolunteer = this.volunteersCRUD.activeVolunteers[0];
      this.volunteersCRUD.initializeVolunteerForm();
      return;
    }
    this.volunteersCRUD.selectedVolunteer = undefined;
  }

  secondState(){
    ///TODO
    this.volunteersCRUD.changeGridState(1)
    if(this.volunteersCRUD.archivedVolunteers != undefined){
      this.volunteersCRUD.formMode = 2;
      this.volunteersCRUD.selectedVolunteer = this.volunteersCRUD.archivedVolunteers[0];
      this.volunteersCRUD.initializeVolunteerForm();
      return;
    }
    this.volunteersCRUD.selectedVolunteer = undefined;
  }

  thirdState(){
    ///TODO
    this.volunteersCRUD.changeGridState(2)
    if(this.volunteersCRUD.requestedToBeArchivedVolunteers != undefined){
      this.volunteersCRUD.formMode = 2;
      this.volunteersCRUD.selectedVolunteer = this.volunteersCRUD.requestedToBeArchivedVolunteers[0]
      this.volunteersCRUD.initializeVolunteerForm();
      return;
    }
    this.volunteersCRUD.selectedVolunteer = undefined;
  }

  activateAddMode(){
    this.volunteersCRUD.activateAddMode();
  }

  search(event){
    if(event.length != 0) this.searchMode = true;
    else this.searchMode = false;
    this.volunteersCRUD.search(event);
  }
}
