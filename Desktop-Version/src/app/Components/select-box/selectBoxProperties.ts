import { FormGroup } from "@angular/forms";
import SelectBoxOption from "./selectBoxOption";

export default interface selectBoxProperties{
    defaultValueIndex:number;
    options:SelectBoxOption[];
    label:string;
    formControlName:string;
    formGroup:FormGroup;
}