import { Component, OnInit } from '@angular/core';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent implements OnInit {

  constructor(public eventsCRUD:EventsCRUDService) { }

  ngOnInit(): void {
  }

}
