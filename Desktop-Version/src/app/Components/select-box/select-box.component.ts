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

  selectedOption:any;

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
    this.changeSelection(this.valueToObject(this.selectBoxProperties.defaultValue));
  }

  openList():void {
    this.open = true;
  }

  closeList():void {
    this.open = false;
  }

  changeSelection(option): void{
    this.changeSelectedValue(option[this.selectBoxProperties.objectDefine.value]);
    this.selectedOption = option
    this.closeList();
  }

  changeSelectedValue(optionValue): void{
    this.changeInputValue(optionValue);
  }

  changeInputValue(optionValue): void{
    this.selectBoxProperties.formGroup.controls[this.selectBoxProperties.formControlName].setValue(optionValue);
  }

  toggleList():void{
    if (this.selectBoxProperties.disabled) return;
    this.open? this.closeList() : this.openList();
  }

  valueToObject(value){
    for (let i=0; i<this.selectBoxProperties.options.length; i++){
      if (this.selectBoxProperties.options[i][this.selectBoxProperties.objectDefine.value] == value){
        return this.selectBoxProperties.options[i];
      }
    }
  }
}
