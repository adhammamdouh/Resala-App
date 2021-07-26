import { FormController } from "../form-controller";

export interface DateTimeProperties {
    placeholder: string;
    value: any;
    title: string;
    disabled: boolean;
    format: string;
    formController: FormController;
}
