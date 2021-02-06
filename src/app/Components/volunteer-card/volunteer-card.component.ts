import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-volunteer-card',
  templateUrl: './volunteer-card.component.html',
  styleUrls: ['./volunteer-card.component.scss']
})
export class VolunteerCardComponent implements OnInit {

  constructor() { }
  @Input() active = false;
  @Input() first = false;
  @Input() name = "محمد مصطفي";
  ngOnInit(): void {
  }

}
