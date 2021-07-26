import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DateTimeProperties } from "src/app/components/date-time-picker/date-time-properties";
import { InputProperties } from "src/app/components/input/input-properties";
import selectBoxProperties from "src/app/components/select-box/selectBoxProperties";
import { branches, options } from "src/app/data/general-data.enum";
import Branch from "src/app/domains/Branch";
import ResalaEvent from "src/app/domains/ResalaEvent/ResalaEvent";

export class EventForm {
    eventForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        hasCalls: new FormControl('', [Validators.required]),
        shareable: new FormControl('', [Validators.required]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl('', [Validators.required]),

        invitationStartTime: new FormControl('', [Validators.required]),
        feedBackStartTime: new FormControl('', [Validators.required]),
        notAttendStartTime: new FormControl('', [Validators.required]),
        invitationEndTime: new FormControl('', [Validators.required]),
        feedBackEndTime: new FormControl('', [Validators.required]),
        notAttendEndTime: new FormControl('', [Validators.required]),

        description: new FormControl('', [Validators.required]),
        script: new FormControl('', [Validators.required]),
        branches: new FormControl('', [Validators.required])
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
    
    from: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.from',
                                    disabled: false,
                                    format: 'HH:mm DD-MM-YYYY',
                                    formController: {formGroup: this.eventForm, formControllerName: 'from'}}

    to: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.to', 
                                    disabled: false,
                                    format: 'HH:mm DD-MM-YYYY',
                                    formController: {formGroup: this.eventForm, formControllerName: 'to'}}

    invitationStartTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.invitationStartTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'invitationStartTime'}}

    feedBackStartTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.feedBackStartTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'feedBackStartTime'}}

    notAttendStartTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.notAttendStartTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'notAttendStartTime'}}

    invitationEndTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.invitationEndTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'invitationEndTime'}}

    feedBackEndTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.feedBackEndTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'feedBackEndTime'}}

    notAttendEndTime: DateTimeProperties = {placeholder: 'PLACEHOLDER.chooseDate', 
                                    value: '', 
                                    title: 'EVENT_FORM.notAttendEndTime', 
                                    disabled: false,
                                    format: 'YYYY-MM-DD HH:mm',
                                    formController: {formGroup: this.eventForm, formControllerName: 'notAttendEndTime'}}

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

    branches: selectBoxProperties = { defaultValueIndex: [], 
                                        label: 'EVENT_FORM.branches', 
                                        options: options.branches,
                                        selectedItemValue: '[1,2]',
                                        formController: {formGroup: this.eventForm, formControllerName: 'branches'}};

                                    /**eventForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        hasCalls: new FormControl('', [Validators.required]),
        shareable: new FormControl('', [Validators.required]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl('', [Validators.required]),
        callsStartDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        script: new FormControl('', [Validators.required])
    }) */
    constructor(event: ResalaEvent = null) {
        if(event) {
            this.eventForm.controls['name'].setValue(event.name);
            this.eventForm.controls['hasCalls'].setValue(event.hasCalls);
            this.eventForm.controls['shareable'].setValue(event.shareable);
            this.eventForm.controls['from'].setValue(event.fromDate);
            this.eventForm.controls['to'].setValue(event.toDate);
            this.eventForm.controls['invitationStartTime'].setValue(event.invitationStartTime);
            this.eventForm.controls['feedBackStartTime'].setValue(event.feedBackStartTime);
            this.eventForm.controls['notAttendStartTime'].setValue(event.notAttendStartTime);
            this.eventForm.controls['invitationEndTime'].setValue(event.invitationEndTime);
            this.eventForm.controls['feedBackEndTime'].setValue(event.feedBackEndTime);
            this.eventForm.controls['notAttendEndTime'].setValue(event.notAttendEndTime);
            this.eventForm.controls['description'].setValue(event.description);
            this.eventForm.controls['script'].setValue(event.script);
            this.eventForm.controls['branches'].setValue(this.getEventBranches(event));

            this.shareable.selectedItemValue = event.shareable;
            this.hasCalls.selectedItemValue = event.hasCalls;
        }

    }

    updateEventData(event: ResalaEvent) {
        event.name = this.eventForm.controls['name'].value;
        event.hasCalls = this.eventForm.controls['hasCalls'].value;
        event.shareable = this.eventForm.controls['shareable'].value;
        event.fromDate = this.eventForm.controls['from'].value;
        event.toDate = this.eventForm.controls['to'].value;

        event.invitationStartTime = this.eventForm.controls['invitationStartTime'].value;
        event.feedBackStartTime = this.eventForm.controls['feedBackStartTime'].value;
        event.notAttendStartTime = this.eventForm.controls['notAttendStartTime'].value;
        event.invitationEndTime = this.eventForm.controls['invitationEndTime'].value;
        event.feedBackEndTime = this.eventForm.controls['feedBackEndTime'].value;
        event.notAttendEndTime = this.eventForm.controls['notAttendEndTime'].value;

        event.script = this.eventForm.controls['script'].value;
        event.description = this.eventForm.controls['description'].value;
        event.branches = this.generateBranch(this.eventForm.controls['branches'].value)
        return event;
    }

    getEventBranches(event: ResalaEvent) {
        let branchIds = [];
        for(let i = 0; i < event.branches.length ; ++i) {
            branchIds.push(event.branches[i].id);
        }

        return branchIds;
    }

    generateBranch(branchIds: number[]) {
        let branches: Branch[] = [];
        for(let i = 0; i < branchIds.length ; ++i) {
            branches.push({id: branchIds[i], name: ''});
        }

        return branches;
    }

    getEventObj() {
        let event: ResalaEvent = {id: 0, 
                                  name: '', 
                                  script: '', 
                                  invitationEndTime: null, 
                                  invitationStartTime: null,
                                  feedBackStartTime: null,
                                  feedBackEndTime: null,
                                  notAttendEndTime: null,
                                  notAttendStartTime: null,
                                  toDate: null, 
                                  fromDate: null, 
                                  shareable: null, 
                                  eventResult: null, 
                                  eventStatus: null,
                                  hasCalls: null, 
                                  description: '',
                                  branches: [{id: 0, name: ''}]};
        this.updateEventData(event);
        return event;
    }
}
