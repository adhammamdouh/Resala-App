import { Component, Input, OnInit } from '@angular/core';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';

@Component({
  selector: 'app-volunteer-data-collector-header',
  templateUrl: './volunteer-data-collector-header.component.html',
  styleUrls: ['./volunteer-data-collector-header.component.scss'],
})
export class VolunteerDataCollectorHeaderComponent implements OnInit {
  @Input() volunteer: Volunteer;

  constructor() { }

  ngOnInit() {}

}
