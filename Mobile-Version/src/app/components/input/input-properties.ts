import { FormController } from "../form-controller";

export interface InputProperties {
    placeholder: string;
    iconSrc: string;
    value: string;
    title: string;
    hasIcon: boolean;
    type: string;
    disabled: boolean;
    formController: FormController;
}


