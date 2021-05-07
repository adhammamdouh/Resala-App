import { FormGroup} from "@angular/forms";

export default interface InputProperties {
    type:string;
    label:string;
    errorMessage:string;
    placeHolder:string;
    formGroup:FormGroup;
    formControlName: string;
    disabled: boolean;
}