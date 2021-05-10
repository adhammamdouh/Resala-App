import { Component, Input, OnInit } from '@angular/core';
import InputProperties from './inputProperties';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() inputProperties:InputProperties;
  constructor() { }
  ngOnInit(): void {
    
  }
}
