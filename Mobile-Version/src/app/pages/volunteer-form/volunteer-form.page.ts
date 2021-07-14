import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputProperties } from 'src/app/components/input/input-properties';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';
import { VolunteerForm } from './volunteer-form';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.page.html',
  styleUrls: ['./volunteer-form.page.scss'],
})
export class VolunteerFormPage implements OnInit {
  volunteerFormAtt: VolunteerForm;
  isAddForm: boolean = true;
  mode: string;
  volunteer: Volunteer;

  constructor(private volunteerCRUD: VolunteerCRUDService,
              private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.mode = JSON.parse(params["mode"]);
      if(this.mode === 'edit') {
        this.volunteer = JSON.parse(params["volunteer"]);
        this.volunteerFormAtt = new VolunteerForm(this.volunteer);
      } else {
        this.volunteerFormAtt = new VolunteerForm();
      }
    });
  }

  ngOnInit() {
  }

  addVolunteer() {
    this.volunteerCRUD.createVolunteer(this.volunteerFormAtt.volunteerForm);
  }

  editVolunteer() {
    this.volunteerFormAtt.updateVolunteerData(this.volunteer);
    this.volunteerCRUD.updateVolunteer(this.volunteer);
  }

}
