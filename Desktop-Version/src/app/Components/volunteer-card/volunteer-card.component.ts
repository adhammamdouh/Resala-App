import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';
import Volunteer from 'src/app/Domains/Volunteer/Volunteer';

@Component({
  selector: 'app-volunteer-card',
  templateUrl: './volunteer-card.component.html',
  styleUrls: ['./volunteer-card.component.scss']
})
export class VolunteerCardComponent implements OnInit {

  constructor(private volunteersCRUD:VolunteersCRUD) { }
  @Input() volunteer: Volunteer;
  
  ngOnInit(): void {
  
  }
  changeSelectedVolunteer(){
    this.volunteersCRUD.changeSelectedVolunteer(this.volunteer);
  }
  isThisActiveCard(){
    return (this.volunteersCRUD.getCurrentSelectedVolunteer()['id'] == this.volunteer['id'])
  }
}
