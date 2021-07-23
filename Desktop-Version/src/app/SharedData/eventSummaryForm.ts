import { FormControl, FormGroup, Validators } from "@angular/forms";
import InputProperties from "../components/input/inputProperties";
import selectBoxProperties from "../components/select-box/SelectBoxProperties";
import textAreaProperties from "../components/textarea/TextAreaProperties";
import { DateFormatter } from "../Controllers/dateFormatter/date-formatter.service";
import ResalaEvent from "../Domains/ResalaEvent/ResalaEvent";

export default class EventSummaryForm {
    
    private disabledInput: any = true;
    
    public eventName:InputProperties;

    public from:InputProperties;

    public to:InputProperties;

    public eventDescription:textAreaProperties;

    public eventText:textAreaProperties;

    public dateFormatter:DateFormatter = new DateFormatter();
    
    public eventsForm = new FormGroup({
        eventName: new FormControl(''),
        from: new FormControl(''),
        to: new FormControl(''),
        eventDescription: new FormControl(''),
        eventText: new FormControl('')
    })
    
    initializeForm(resalaEvent:ResalaEvent){
        if(resalaEvent == undefined) return;
        this.disabledInput = true;
        this.eventsForm = new FormGroup({
            eventName: new FormControl(resalaEvent.name),
            from: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.fromDate)),
            to: new FormControl(this.dateFormatter.formatDateTimeFromBackEnd(resalaEvent.toDate)),
            eventDescription: new FormControl(resalaEvent.description),
            eventText: new FormControl(resalaEvent.script)
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
    }
}