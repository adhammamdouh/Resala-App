import { Component, Input, OnInit } from '@angular/core';
import textAreaProperties from './TextAreaProperties';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() textAreaProperties:textAreaProperties;
  constructor() { }

  ngOnInit(): void {
  }

}
