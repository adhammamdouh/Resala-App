import { Component, Input, OnInit } from '@angular/core';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';

@Component({
  selector: 'app-volunteer-data-collector-body',
  templateUrl: './volunteer-data-collector-body.component.html',
  styleUrls: ['./volunteer-data-collector-body.component.scss'],
})
export class VolunteerDataCollectorBodyComponent implements OnInit {
  @Input() volunteer: Volunteer;
  
  constructor() { }

  ngOnInit() {}

}
