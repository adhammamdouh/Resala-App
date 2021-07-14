import { FormGroup } from "@angular/forms";
import { FormController } from "../form-controller";
import SelectBoxOption from "./selectBoxOption";

export default interface selectBoxProperties{
    defaultValueIndex: number;
    selectedItemValue: any;
    options:SelectBoxOption[];
    label:string;
    formController: FormController;
}