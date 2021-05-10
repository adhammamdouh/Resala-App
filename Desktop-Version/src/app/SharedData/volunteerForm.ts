import { FormControl, FormGroup, Validators } from "@angular/forms";
import InputProperties from "../components/input/inputProperties";
import selectBoxProperties from "../components/select-box/SelectBoxProperties";
import textAreaProperties from "../components/textarea/TextAreaProperties";

export default class VolunteerForm {
    public volunteerForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        nickName: new FormControl('', [Validators.required]),
        birthDate: new FormControl('', [Validators.required]),
        nationalID: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
        gender: new FormControl('', [Validators.required]),
        university: new FormControl('', [Validators.required]),
        faculty: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        joiningDate: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
        tShirt: new FormControl('', [Validators.required]),
        branch: new FormControl('', [Validators.required]),
        apartmentNumber: new FormControl('', [Validators.required]),
        buildingNumber: new FormControl('', [Validators.required]),
        streetName: new FormControl('', [Validators.required]),
        neighborhoodName: new FormControl('', [Validators.required]),
        governorate: new FormControl('', [Validators.required]),
        comments: new FormControl('')
    })

    public name:InputProperties = {
        label: 'الأسم',
        type: 'text',
        errorMessage: 'برجاء التأكد من الأسم',
        placeHolder: 'الأسم',
        formControlName: 'name',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public nickName:InputProperties = {
        label: 'الأسم المستعار',
        type: 'text',
        errorMessage: 'برجاء التأكد من الأسم المستعار',
        placeHolder: 'الأسم المستعار',
        formControlName: 'nickName',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public birthDate:InputProperties = {
        label: 'تاريخ الميلاد',
        type: 'date',
        errorMessage: 'برجاء التأكد من تاريخ الميلاد',
        placeHolder: 'تاريخ الميلاد',
        formControlName: 'birthDate',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public phoneNumber:InputProperties = {
        label: 'رقم الهاتف',
        type: 'text',
        errorMessage: 'برجاء التأكد من رقم الهاتف',
        placeHolder: 'رقم الهاتف',
        formControlName: 'phoneNumber',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public nationalID:InputProperties = {
        label: 'الرقم القومي',
        type: 'number',
        errorMessage: 'برجاء التأكد من الرقم القومي ان يكون 14 رقم',
        placeHolder: 'الرقم القومي',
        formControlName: 'nationalID',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public gender:selectBoxProperties = {
        label: 'النوع',
        formControlName: 'gender',
        formGroup: this.volunteerForm,
        defaultValueIndex: 0,
        options: [
            {
              text: 'ذكر',
              value: 'male'
            },
            {
              text: 'انثي',
              value: 'female'
            }
        ]
    }

    public university:InputProperties = {
        label: 'الجامعة',
        type: 'text',
        errorMessage: 'برجاء التأكد من الجماعة',
        placeHolder: 'الجامعة',
        formControlName: 'university',
        formGroup: this.volunteerForm,
        disabled: false
    }


    public faculty:InputProperties = {
        label: 'الكلية',
        type: 'text',
        errorMessage: 'برجاء التأكد من الكلية',
        placeHolder: 'الكلية',
        formControlName: 'faculty',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public joiningDate:InputProperties = {
        label: 'تاريخ الانضمام',
        type: 'date',
        errorMessage: 'برجاء التأكد من تاريخ الانضمام',
        placeHolder: 'تاريخ الانضمام',
        formControlName: 'joiningDate',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public age:InputProperties = {
        label: 'العمر',
        type: 'text',
        errorMessage: 'برجاء التأكد من العمر',
        placeHolder: 'العمر',
        formControlName: 'age',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public tShirt:selectBoxProperties = {
        label: 'تي شيرت',
        formControlName: 'tShirt',
        formGroup: this.volunteerForm,
        defaultValueIndex: 0,
        options: [
            {
              text: 'نعم',
              value: true
            },
            {
              text: 'لا',
              value: false
            }
        ]
    }

    public branch:selectBoxProperties = {
        label: 'الفرع',
        formControlName: 'branch',
        formGroup: this.volunteerForm,
        defaultValueIndex: 0,
        options: JSON.parse(localStorage.getItem('branches'))
    }
   
    public apartmentNumber:InputProperties = {
        label: 'رقم الشقة',
        type: 'number',
        errorMessage: 'برجاء التأكد من رقم الشقة',
        placeHolder: 'رقم الشقة',
        formControlName: 'apartmentNumber',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public buildingNumber:InputProperties = {
        label: 'رقم العمارة',
        type: 'number',
        errorMessage: 'برجاء التأكد من رقم العمارة',
        placeHolder: 'رقم العمارة',
        formControlName: 'buildingNumber',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public streetName:InputProperties = {
        label: 'اسم الشارع',
        type: 'text',
        errorMessage: 'برجاء التأكد من اسم الشارع',
        placeHolder: 'اسم الشارع',
        formControlName: 'streetName',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public neighborhoodName:InputProperties = {
        label: 'اسم الحي',
        type: 'text',
        errorMessage: 'برجاء التأكد من اسم الحي',
        placeHolder: 'اسم الحي',
        formControlName: 'neighborhoodName',
        formGroup: this.volunteerForm,
        disabled: false
    }

    public governorate:selectBoxProperties = {
        label: 'اسم المحافظة',
        formControlName: 'governorate',
        formGroup: this.volunteerForm,
        defaultValueIndex: 0,
        options: JSON.parse(localStorage.getItem('branches'))
    }
    
    public comments:textAreaProperties = {
        label: 'التعليقات',
        errorMessage: 'برجاء التأكد من التعليقات',
        placeHolder: 'التعليقات',
        formControlName: 'comments',
        formGroup: this.volunteerForm,
        disabled: false
    }
}