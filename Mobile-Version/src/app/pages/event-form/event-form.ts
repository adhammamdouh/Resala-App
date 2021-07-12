import { FormControl, FormGroup, Validators } from "@angular/forms";
import { InputProperties } from "src/app/components/input/input-properties";
import selectBoxProperties from "src/app/components/select-box/selectBoxProperties";
import { options } from "src/app/data/general-data.enum";

export class EventForm {
    eventForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        hasCalls: new FormControl('', [Validators.required]),
        shareable: new FormControl('', [Validators.required]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl('', [Validators.required]),
        callsStartDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        script: new FormControl('', [Validators.required])
    })

    name: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                            value: '', 
                            iconSrc: '', 
                            title: 'EVENT_FORM.name', 
                            hasIcon: false, 
                            type: 'text',
                            disabled: false,
                            formController: {formGroup: this.eventForm, formControllerName: 'name'}};

    hasCalls:selectBoxProperties = { defaultValueIndex: 0, 
                                label: 'EVENT_FORM.hasCalls', 
                                options: options.answers,
                                selectedItemValue: null,
                                formController: {formGroup: this.eventForm, formControllerName: 'hasCalls'}};

    shareable:selectBoxProperties = { defaultValueIndex: 0, 
                                    label: 'EVENT_FORM.shareable', 
                                    options: options.answers,
                                    selectedItemValue: null,
                                    formController: {formGroup: this.eventForm, formControllerName: 'shareable'}};
    
    from: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    iconSrc: '', 
                                    title: 'EVENT_FORM.from', 
                                    hasIcon: false, 
                                    type: 'date',
                                    disabled: false,
                                    formController: {formGroup: this.eventForm, formControllerName: 'from'}}

    to: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    iconSrc: '', 
                                    title: 'EVENT_FORM.to', 
                                    hasIcon: false, 
                                    type: 'date',
                                    disabled: false,
                                    formController: {formGroup: this.eventForm, formControllerName: 'to'}}

    callsStartDate: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    iconSrc: '', 
                                    title: 'EVENT_FORM.to', 
                                    hasIcon: false, 
                                    type: 'date',
                                    disabled: false,
                                    formController: {formGroup: this.eventForm, formControllerName: 'callsStartDate'}}

    description: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    iconSrc: '', 
                                    title: 'EVENT_FORM.description', 
                                    hasIcon: false, 
                                    type: 'text',
                                    disabled: false,
                                    formController: {formGroup: this.eventForm, formControllerName: 'description'}};
    
    script: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    iconSrc: '', 
                                    title: 'EVENT_FORM.script', 
                                    hasIcon: false, 
                                    type: 'text',
                                    disabled: false,
                                    formController: {formGroup: this.eventForm, formControllerName: 'script'}};
}
