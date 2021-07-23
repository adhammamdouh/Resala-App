import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SelectBoxOption from '../select-box/selectBoxOption';
import selectBoxProperties from '../select-box/SelectBoxProperties';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {

  open: Boolean = false;
  
  inside: boolean = false;
  
  @Input() selectBoxProperties:selectBoxProperties;

  selectedOptions:any[]=[];

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
    
  }

  openList():void {
    this.open = true;
    this.selectedOptions = this.selectBoxProperties.formGroup.controls[this.selectBoxProperties.formControlName].value
  }

  closeList():void {
    this.open = false;
  }

  changeInputValue(): void{
    this.selectBoxProperties.formGroup.controls[this.selectBoxProperties.formControlName].setValue(this.selectedOptions);
  }

  toggleList():void{
    if (this.selectBoxProperties.disabled) return;
    this.open? this.closeList() : this.openList();
  }

  removeFromSelection(option){
    this.selectedOptions = this.selectBoxProperties.formGroup.controls[this.selectBoxProperties.formControlName].value
    let selected = [];
    for (let i=0; i<this.selectedOptions.length; i++){
      if (this.selectedOptions[i][this.selectBoxProperties.objectDefine.value] != option[this.selectBoxProperties.objectDefine.value]){
        selected.push(this.selectedOptions[i])
      }
    }
    this.selectedOptions = selected;
    this.changeInputValue()
  }

  isSelected(selectOption){
    for (let i=0; i<this.selectedOptions.length; i++){
      if (selectOption[this.selectBoxProperties.objectDefine.value] == this.selectedOptions[i][this.selectBoxProperties.objectDefine.value]) return true;
    }
    return false;
  }

  addToSelect(option){
    if(!this.isSelected(option)) this.selectedOptions.push(option);
    this.changeInputValue()
  }
  
}
