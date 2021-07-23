import { FormGroup } from "@angular/forms";
import SelectBoxValueValueSelector from "./selectBoxValueSelector";

export default interface selectBoxProperties{
    defaultValue:number;
    options:any[];
    label:string;
    formControlName:string;
    formGroup:FormGroup;
    disabled:Boolean;
    objectDefine: SelectBoxValueValueSelector;
}