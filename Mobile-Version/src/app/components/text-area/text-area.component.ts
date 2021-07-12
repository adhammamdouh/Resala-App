import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputProperties } from '../input/input-properties';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() inputProperties: InputProperties;

  @Output() inputPropertiesChange: EventEmitter<InputProperties> = new EventEmitter();

  focused: boolean = false;

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit() {}

  onChange() {
    this.inputPropertiesChange.emit(this.inputProperties);
  }

  onTextFocus(status) {
    this.focused = status;
  }

}
