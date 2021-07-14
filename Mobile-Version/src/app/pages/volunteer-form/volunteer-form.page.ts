import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProperties } from 'src/app/components/input/input-properties';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';
import { VolunteerForm } from './volunteer-form';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.page.html',
  styleUrls: ['./volunteer-form.page.scss'],
})
export class VolunteerFormPage implements OnInit {
  volunteerFormAtt: VolunteerForm = new VolunteerForm();
  isAddForm: boolean = true;

  constructor(private volunteerCRUD: VolunteerCRUDService) { }

  ngOnInit() {
  }

  addVolunteer() {
    this.volunteerCRUD.generateVolunteerObjFromForm(this.volunteerFormAtt.volunteerForm);
  }

  editVolunteer() {

  }

}
