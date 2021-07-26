import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-available-data',
  templateUrl: './no-available-data.component.html',
  styleUrls: ['./no-available-data.component.scss'],
})
export class NoAvailableDataComponent implements OnInit {
  noDataStr = 'NO_AVAILABLE_DATA';
  constructor() { }

  ngOnInit() {}

}
