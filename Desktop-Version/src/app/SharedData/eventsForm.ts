import { FormControl, FormGroup, Validators } from "@angular/forms";
import InputProperties from "../components/input/inputProperties";
import selectBoxProperties from "../components/select-box/SelectBoxProperties";
import textAreaProperties from "../components/textarea/TextAreaProperties";
import { DateFormatter } from "../Controllers/dateFormatter/date-formatter.service";
import ResalaEvent from "../Domains/ResalaEvent/ResalaEvent";

export default class EventsForm {
    
    private disabledInput: any = true;
    
    public eventName:InputProperties;
    
    public hasCalls:selectBoxProperties;

    public branches:selectBoxProperties;

    public sharable:selectBoxProperties;

    public from:InputProperties;

    public invitationStartTime:InputProperties;

    public invitationEndTime:InputProperties;
    
    public feedBackStartTime:InputProperties;
    
    public feedBackEndTime:InputProperties;
    
    public notAttendStartTime:InputProperties;
    
    public notAttendEndTime:InputProperties;

    public to:InputProperties;

    public eventDescription:textAreaProperties;

    public eventText:textAreaProperties;

    public dateFormatter:DateFormatter = new DateFormatter();
    
    public eventsForm = new FormGroup({
        eventName: new FormControl('', [Validators.required]),
        hasCalls: new FormControl('', [Validators.required]),
        sharable: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
        from: new FormControl('', [Validators.required]),
        to: new FormControl('', [Validators.required]),
        callStartDate: new FormControl('', [Validators.required]),
        eventDescription: new FormControl('', [Validators.required]),
        eventText: new FormControl('', [Validators.required]),
        branches: new FormControl('', [Validators.required])
    })
    
    initializeViewForm(resalaEvent:ResalaEvent){
        if(resalaEvent == undefined) return;
        this.disabledInput = true;
        this.eventsForm = new FormGroup({
            
            eventName: new FormControl(resalaEvent.name),
            
            hasCalls: new FormControl(resalaEvent.hasCalls),
            
            sharable: new FormControl(resalaEvent.shareable),
            
            from: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.fromDate)),
            
            to: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.toDate)),
            
            invitationStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.invitationStartTime)),

            invitationEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.invitationEndTime)),
            
            feedBackStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.feedBackStartTime)),
            
            feedBackEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.feedBackEndTime)),
            
            notAttendStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.notAttendStartTime)),
            
            notAttendEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.notAttendEndTime)),
            
            eventDescription: new FormControl(resalaEvent.description),
            
            eventText: new FormControl(resalaEvent.script),

            branches: new FormControl(resalaEvent.branches)
        })
        this.initializeFormInputs();
    }

    initializeAddForm(){
        this.disabledInput = false;
        this.eventsForm = new FormGroup({
            
            eventName: new FormControl('', [Validators.required]),
            
            hasCalls: new FormControl(true, [Validators.required]),
            
            sharable: new FormControl(false, [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
            
            from: new FormControl('', [Validators.required]),
            
            to: new FormControl('', [Validators.required]),
            
            eventDescription: new FormControl('', [Validators.required]),
            
            eventText: new FormControl('', [Validators.required]),
            
            invitationStartTime: new FormControl('', [Validators.required]),

            invitationEndTime: new FormControl('', [Validators.required]),
            
            feedBackStartTime: new FormControl('', [Validators.required]),
            
            feedBackEndTime: new FormControl('', [Validators.required]),
            
            notAttendStartTime: new FormControl('', [Validators.required]),
            
            notAttendEndTime: new FormControl('', [Validators.required]),
            
            branches : new FormControl([], [Validators.required])
        })
        this.initializeFormInputs();
    }
    
    initializeEditForm(resalaEvent:ResalaEvent){
        this.disabledInput = false;
        this.eventsForm = new FormGroup({
            
            eventName: new FormControl(resalaEvent.name, [Validators.required]),
            
            hasCalls: new FormControl(resalaEvent.hasCalls?1:0, [Validators.required]),
            
            sharable: new FormControl(resalaEvent.shareable?1:0, [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
            
            from: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.fromDate), [Validators.required]),
            
            to: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.toDate), [Validators.required]),
            
            eventDescription: new FormControl(resalaEvent.description, [Validators.required]),
            
            eventText: new FormControl(resalaEvent.script, [Validators.required]),
            
            invitationStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.invitationStartTime), [Validators.required]),

            invitationEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.invitationEndTime), [Validators.required]),
            
            feedBackStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.feedBackStartTime), [Validators.required]),
            
            feedBackEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.feedBackEndTime), [Validators.required]),
            
            notAttendStartTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.notAttendStartTime), [Validators.required]),
            
            notAttendEndTime: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.notAttendEndTime), [Validators.required]),
            
            branches: new FormControl(resalaEvent.branches, [Validators.required])
        })
        this.initializeFormInputs();
    }

    initializeFormInputs(){
        this.eventName = {
            label: 'اسم الحدث',
            type: 'text',
            errorMessage: 'برجاء التأكد من اسم الحدث',
            placeHolder: 'اسم الحدث',
            formControlName: 'eventName',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }
    
        this.hasCalls = {
            label: 'يحتوي علي مكالمات',
            formControlName: 'hasCalls',
            formGroup: this.eventsForm,
            defaultValue: this.eventsForm.controls['hasCalls'].value,
            options: [
                {
                  text: 'نعم',
                  value: true
                },
                {
                  text: 'لا',
                  value: false
                }
            ],
            disabled: this.disabledInput,
            objectDefine: {
                text: 'text',
                value: 'value'
            }
        }
    
        this.sharable = {
            label: 'قابل للمشاركة',
            formControlName: 'sharable',
            formGroup: this.eventsForm,
            defaultValue: this.eventsForm.controls['sharable'].value,
            options: [
                {
                  text: 'نعم',
                  value: true
                },
                {
                  text: 'لا',
                  value: false
                }
            ],
            disabled: this.disabledInput,
            objectDefine: {
                text: 'text',
                value: 'value'
            }
        }
    
        this.from = {
            label: 'من',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من تاريخ بداية الحدث',
            placeHolder: 'تاريخ بداية الحذث',
            formControlName: 'from',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }
    
        this.to = {
            label: 'الي',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من تاريخ نهاية الحدث',
            placeHolder: 'تاريخ نهاية الحذث',
            formControlName: 'to',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }
    
        this.eventDescription = {
            label: 'وصف الحدث',
            errorMessage: 'برجاء التأكد من وصف الحدث',
            placeHolder: 'وصف الحدث',
            formControlName: 'eventDescription',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }
    
        this.eventText = {
            label: 'نص الحدث',
            errorMessage: 'برجاء التأكد من نص الحدث',
            placeHolder: 'نص الحدث',
            formControlName: 'eventText',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.invitationStartTime = {
            label: 'موعد بدء الدعوات',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من تاريخ موعد بدء الدعوات',
            placeHolder: 'موعد بدء الدعوات',
            formControlName: 'invitationStartTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.invitationEndTime = {
            label: 'موعد انتهاء الدعوات',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من موعد انتهاء الدعوات',
            placeHolder: 'موعد انتهاء الدعوات',
            formControlName: 'invitationEndTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }
        
        this.feedBackStartTime = {
            label: 'موعد بدء اخذ الاراء',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من موعد بدء اخذ الاراء',
            placeHolder: 'موعد بدءاخذ الاراء',
            formControlName: 'feedBackStartTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.feedBackEndTime = {
            label: 'موعد انتهاء اخذ الاراء',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من موعد انتهاءاخذ الاراء',
            placeHolder: 'موعد اخذ الاراء',
            formControlName: 'feedBackEndTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.notAttendStartTime = {
            label: 'موعد بدء عدم الحضور',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من موعد بدء عدم الحضور',
            placeHolder: 'موعد بدء عدم الحضور',
            formControlName: 'notAttendStartTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.notAttendEndTime = {
            label: 'موعد انتهاء عدم الحضور',
            type: 'datetime-local',
            errorMessage: 'برجاء التأكد من موعد انتهاء عدم الحضور',
            placeHolder: 'موعد انتهاء عدم الحضور',
            formControlName: 'notAttendEndTime',
            formGroup: this.eventsForm,
            disabled: this.disabledInput
        }

        this.branches = {
            label: 'الفروع',
            formControlName: 'branches',
            formGroup: this.eventsForm,
            defaultValue: this.eventsForm.controls['branches'].value,
            options: JSON.parse(localStorage.getItem('branches')),
            disabled: this.disabledInput,
            objectDefine: {
                text: 'name',
                value: 'id'
            }
        }
    }

    getEventObject(id=null){
        let event:ResalaEvent = {
            id: id,
            fromDate: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['from'].value),
            toDate: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['to'].value),
            name: this.eventsForm.controls['eventName'].value,
            script: this.eventsForm.controls['eventText'].value,
            shareable: this.eventsForm.controls['sharable'].value,
            hasCalls: this.eventsForm.controls['hasCalls'].value,
            resalaEventResult: null,
            branches: this.eventsForm.controls['branches'].value,
            resalaEventStatus: null,
            description: this.eventsForm.controls['eventDescription'].value,
            invitationStartTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['invitationStartTime'].value),
            invitationEndTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['invitationEndTime'].value),
            feedBackStartTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['feedBackStartTime'].value),
            feedBackEndTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['feedBackEndTime'].value),
            notAttendStartTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['notAttendStartTime'].value),
            notAttendEndTime: this.dateFormatter.formatTimeToBackEnd(this.eventsForm.controls['notAttendEndTime'].value),
        }
        return event;
    }
}