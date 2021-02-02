import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-alert',
  templateUrl: './normal-alert.component.html',
  styleUrls: ['./normal-alert.component.scss']
})

export class NormalAlertComponent implements OnInit {

  //@Input() alertType: string;

  constructor() { }

  ngOnInit(): void {
  }
}
