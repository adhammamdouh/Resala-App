import { Component, HostListener, Input, OnInit } from '@angular/core';
import SelectBoxOption from './selectBoxOption';
import selectBoxProperties from './SelectBoxProperties';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  
  open: Boolean = false;
  
  inside: boolean = false;
  
  @Input() selectBoxProperties:selectBoxProperties;

  selectedOption:SelectBoxOption;

  constructor() { }

  @HostListener("click")
  clicked() {
    this.inside = true;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.inside ? '' : this.closeList();
    this.inside = false;
  }
  ngOnInit(): void {
    this.changeSelectedValue(this.selectBoxProperties.options[this.selectBoxProperties.defaultValueIndex]);
  }

  openList():void {
    this.open = true;
  }

  closeList():void {
    this.open = false;
  }

  changeSelection(optionValue:SelectBoxOption): void{
    this.changeSelectedValue(optionValue);
    this.closeList();
  }

  changeSelectedValue(optionValue:SelectBoxOption): void{
    this.selectedOption = optionValue
    this.changeInputValue(optionValue);
  }

  changeInputValue(optionValue:SelectBoxOption): void{
    this.selectBoxProperties.formGroup.controls[this.selectBoxProperties.formControlName].setValue(optionValue.value);
  }

  toggleList():void{
    this.open? this.closeList() : this.openList();
  }
}
