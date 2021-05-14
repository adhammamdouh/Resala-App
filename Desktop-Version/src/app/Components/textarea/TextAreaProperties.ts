import { FormGroup} from "@angular/forms";

export default interface textAreaProperties {
    label:string;
    errorMessage:string;
    placeHolder:string;
    formGroup:FormGroup;
    formControlName: string;
    disabled: boolean;
}