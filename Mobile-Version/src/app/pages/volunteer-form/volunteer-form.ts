import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DateTimeProperties } from "src/app/components/date-time-picker/date-time-properties"
import { InputProperties } from "src/app/components/input/input-properties"
import selectBoxProperties from "src/app/components/select-box/selectBoxProperties"
import { options } from "src/app/data/general-data.enum"
import Volunteer from "src/app/domains/Volunteer/Volunteer"

export class VolunteerForm {
    volunteerForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        middlename: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        nickName: new FormControl('', [Validators.required]),
        birthDate: new FormControl('', [Validators.required]),
        nationalID: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),
        gender: new FormControl('', [Validators.required]),
        university: new FormControl('', [Validators.required]),
        faculty: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        joiningDate: new FormControl('', [Validators.required]),
        //age: new FormControl('', [Validators.required]),
        tShirt: new FormControl('', [Validators.required]),
        branch: new FormControl('', [Validators.required]),
        apartmentNumber: new FormControl('', [Validators.required]),
        buildingNumber: new FormControl('', [Validators.required]),
        streetName: new FormControl('', [Validators.required]),
        neighborhoodName: new FormControl('', [Validators.required]),
        governorate: new FormControl('', [Validators.required]),
        miniCamp: new FormControl('', [Validators.required]),
        educationLevel: new FormControl('', [Validators.required]),
        comments: new FormControl(''),
    })
      
    firstname: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                                value: '', 
                                                iconSrc: '', 
                                                title: 'VOLUNTEER_FORM.firstname', 
                                                hasIcon: false, 
                                                type: 'text',
                                                disabled: false,
                                                formController: {formGroup: this.volunteerForm, formControllerName: 'firstname'}}

    middlename: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                                value: '', 
                                                iconSrc: '', 
                                                title: 'VOLUNTEER_FORM.middlename', 
                                                hasIcon: false, 
                                                type: 'text',
                                                disabled: false,
                                                formController: {formGroup: this.volunteerForm, formControllerName: 'middlename'}}

    lastname: InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                                value: '', 
                                                iconSrc: '', 
                                                title: 'VOLUNTEER_FORM.lastname', 
                                                hasIcon: false, 
                                                type: 'text',
                                                disabled: false,
                                                formController: {formGroup: this.volunteerForm, formControllerName: 'lastname'}}
                                                

    nickName:InputProperties = {placeholder: 'PLACEHOLDER.typeHere', 
                                value: '', 
                                iconSrc: '', 
                                title: 'VOLUNTEER_FORM.nickName', 
                                hasIcon: false, 
                                type: 'text',
                                disabled: false,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'nickName'}}
    

    birthDate:DateTimeProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                    value: '', 
                                    title: 'VOLUNTEER_FORM.birthDate', 
                                    disabled: false,
                                    format: 'DD-MM-YYYY',
                                    formController: {formGroup: this.volunteerForm, formControllerName: 'birthDate'}};

    phoneNumber:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                value: '', 
                                iconSrc: '', 
                                title: 'VOLUNTEER_FORM.phoneNumber', 
                                hasIcon: false, 
                                type: 'number',
                                disabled: false,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'phoneNumber'}}

    nationalID:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                value: '', 
                                iconSrc: '', 
                                title: 'VOLUNTEER_FORM.nationalID', 
                                hasIcon: false, 
                                type: 'number',
                                disabled: false,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'nationalID'}}

    educationLevel:selectBoxProperties = { defaultValueIndex: 0, 
                                    label: 'VOLUNTEER_FORM.educationLevel', 
                                    options: options.educationLevel,
                                    selectedItemValue: null,
                                    formController: {formGroup: this.volunteerForm, formControllerName: 'educationLevel'}}
    

    university:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                value: '', 
                                iconSrc: '', 
                                title: 'VOLUNTEER_FORM.university', 
                                hasIcon: false, 
                                type: 'text',
                                disabled: false,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'university'}}


    faculty:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                            value: '', 
                            iconSrc: '', 
                            title: 'VOLUNTEER_FORM.faculty', 
                            hasIcon: false, 
                            type: 'text',
                            disabled: false,
                            formController: {formGroup: this.volunteerForm, formControllerName: 'faculty'}}

    gender:selectBoxProperties = { defaultValueIndex: 0, 
                                label: 'VOLUNTEER_FORM.gender', 
                                options: options.gender,
                                selectedItemValue: null,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'gender'}}

    joiningDate:DateTimeProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                        value: '', 
                                        title: 'VOLUNTEER_FORM.joiningDate', 
                                        disabled: false,
                                        format: 'DD-MM-YYYY',
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'joiningDate'}}

    /*age:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                        value: '', 
                        iconSrc: '', 
                        title: 'VOLUNTEER_FORM.age', 
                        hasIcon: false, 
                        type: 'text',
                        disabled: false,
                        formController: {formGroup: this.volunteerForm, formControllerName: 'age'}}*/
    tShirt:selectBoxProperties = { defaultValueIndex: 0, 
                                label: 'VOLUNTEER_FORM.tShirt', 
                                options: options.tShirt,
                                selectedItemValue: null,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'tShirt'}}

    branch:selectBoxProperties = { defaultValueIndex: 0, 
                                label: 'VOLUNTEER_FORM.branch', 
                                options: options.branches,
                                selectedItemValue: null,
                                formController: {formGroup: this.volunteerForm, formControllerName: 'branch'}}
    
      
    apartmentNumber:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                        value: '', 
                                        iconSrc: '', 
                                        title: 'VOLUNTEER_FORM.apartmentNumber', 
                                        hasIcon: false, 
                                        type: 'number',
                                        disabled: false,
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'apartmentNumber'}}
    
    buildingNumber:InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                        value: '', 
                                        iconSrc: '', 
                                        title: 'VOLUNTEER_FORM.buildingNumber', 
                                        hasIcon: false, 
                                        type: 'number',
                                        disabled: false,
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'buildingNumber'}}
    
    streetName: InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                            value: '', 
                                            iconSrc: '', 
                                            title: 'VOLUNTEER_FORM.streetName', 
                                            hasIcon: false, 
                                            type: 'text',
                                            disabled: false,
                                            formController: {formGroup: this.volunteerForm, formControllerName: 'streetName'}}
    
    neighborhoodName: InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                        value: '', 
                                        iconSrc: '', 
                                        title: 'VOLUNTEER_FORM.neighborhoodName', 
                                        hasIcon: false, 
                                        type: 'text',
                                        disabled: false,
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'neighborhoodName'}}
    
    governorate: selectBoxProperties = { defaultValueIndex: 0, 
                                        label: 'VOLUNTEER_FORM.governorate', 
                                        options: options.governorates,
                                        selectedItemValue: null,
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'governorate'}}

    miniCamp: selectBoxProperties = { defaultValueIndex: 0, 
                                        label: 'VOLUNTEER_FORM.miniCamp', 
                                        options: options.answers,
                                        selectedItemValue: null,
                                        formController: {formGroup: this.volunteerForm, formControllerName: 'miniCamp'}}

    comments: InputProperties = { placeholder: 'PLACEHOLDER.typeHere', 
                                            value: '', 
                                            iconSrc: '', 
                                            title: 'VOLUNTEER_FORM.comments', 
                                            hasIcon: false, 
                                            type: 'text',
                                            disabled: false,
                                            formController: {formGroup: this.volunteerForm, formControllerName: 'comments'}}
    
    constructor(volunteer: Volunteer = null) {
        if(volunteer) {
            this.volunteerForm.controls['firstname'].setValue(volunteer.firstName);
            this.volunteerForm.controls['middlename'].setValue(volunteer.midName);
            this.volunteerForm.controls['lastname'].setValue(volunteer.lastName);
            this.volunteerForm.controls['nickName'].setValue(volunteer.nickName);
            this.volunteerForm.controls['birthDate'].setValue(volunteer.birthDate);
            this.volunteerForm.controls['nationalID'].setValue(volunteer.nationalId);
            this.volunteerForm.controls['gender'].setValue(volunteer.gender);
            this.volunteerForm.controls['university'].setValue(volunteer.university);
            this.volunteerForm.controls['faculty'].setValue(volunteer.faculty);
            this.volunteerForm.controls['phoneNumber'].setValue(volunteer.phoneNumber);
            this.volunteerForm.controls['joiningDate'].setValue(volunteer.joinDate);
            this.volunteerForm.controls['tShirt'].setValue(volunteer.shirt.id);
            this.volunteerForm.controls['branch'].setValue(volunteer.branch);
            this.volunteerForm.controls['apartmentNumber'].setValue(volunteer.address.apartmentNumber);
            this.volunteerForm.controls['buildingNumber'].setValue(volunteer.address.buildingNumber);
            this.volunteerForm.controls['streetName'].setValue(volunteer.address.streetName);
            this.volunteerForm.controls['neighborhoodName'].setValue(volunteer.address.regionName);
            this.volunteerForm.controls['governorate'].setValue(volunteer.address.capital.id);
            this.volunteerForm.controls['comments'].setValue(volunteer.comments);

            this.miniCamp.selectedItemValue = volunteer.miniCamp;
            this.tShirt.selectedItemValue = volunteer.shirt.id;
            this.gender.selectedItemValue = volunteer.gender;
            this.branch.selectedItemValue = volunteer.branch.id;
            this.governorate.selectedItemValue = volunteer.address.capital.id;
            this.educationLevel.selectedItemValue = volunteer.educationLevel.id;
        }
    }

    updateVolunteerData(volunteer: Volunteer) {
        volunteer.firstName = this.volunteerForm.controls['firstname'].value;
        volunteer.midName = this.volunteerForm.controls['middlename'].value;
        volunteer.lastName = this.volunteerForm.controls['lastname'].value;
        volunteer.nickName = this.volunteerForm.controls['nickName'].value;
        volunteer.birthDate = this.volunteerForm.controls['birthDate'].value;
        volunteer.nationalId = this.volunteerForm.controls['nationalID'].value;
        volunteer.gender = this.volunteerForm.controls['gender'].value;
        volunteer.university = this.volunteerForm.controls['university'].value;
        volunteer.faculty = this.volunteerForm.controls['faculty'].value;
        volunteer.phoneNumber = this.volunteerForm.controls['phoneNumber'].value;
        volunteer.joinDate = this.volunteerForm.controls['joiningDate'].value;
        volunteer.shirt.id = this.volunteerForm.controls['tShirt'].value;
        volunteer.branch.id = this.volunteerForm.controls['branch'].value;
        volunteer.address.apartmentNumber = this.volunteerForm.controls['apartmentNumber'].value;
        volunteer.address.buildingNumber = this.volunteerForm.controls['buildingNumber'].value;
        volunteer.address.streetName = this.volunteerForm.controls['streetName'].value;
        volunteer.address.regionName = this.volunteerForm.controls['neighborhoodName'].value;
        volunteer.address.capital.id = this.volunteerForm.controls['governorate'].value;
        volunteer.miniCamp = this.volunteerForm.controls['miniCamp'].value;
        volunteer.comments = this.volunteerForm.controls['comments'].value;
        volunteer.educationLevel.id = this.volunteerForm.controls['educationLevel'].value;

        return volunteer;
    }  
}
