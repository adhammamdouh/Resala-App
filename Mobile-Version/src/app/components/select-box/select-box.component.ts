import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import SelectBoxOption from './selectBoxOption';
import selectBoxProperties from './selectBoxProperties';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {

  @Input() selectBoxProperties:selectBoxProperties;
  @Output() selectBoxPropertiesChange: EventEmitter<selectBoxProperties> = new EventEmitter();
  
  open: Boolean = false;
  inside: boolean = false;
  selectedOption: SelectBoxOption;
  arrowIcon : '../../assets/icon/arrow/down-arrow.svg';
  
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
    console.log(this.selectBoxProperties.formController.formGroup.controls[this.selectBoxProperties.formController.formControllerName].value)
    if(this.selectBoxProperties.selectedItemValue != null)
      for(let i = 0 ; i < this.selectBoxProperties.options.length; ++i) {
        if(this.selectBoxProperties.selectedItemValue === this.selectBoxProperties.options[i].value) {
          this.changeSelectedValue(this.selectBoxProperties.options[i]);
          break;
        }
      }
      
    else
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
    this.selectedOption = optionValue;
    this.changeInputValue(optionValue);
  }

  changeInputValue(optionValue:SelectBoxOption): void{
    this.selectBoxProperties.formController.formGroup.controls[this.selectBoxProperties.formController.formControllerName].setValue(optionValue.value);
  }

  toggleList():void{
    this.open? this.closeList() : this.openList();
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.value;
  }

}
