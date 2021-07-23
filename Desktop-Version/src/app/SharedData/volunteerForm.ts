import { FormControl, FormGroup, Validators } from "@angular/forms";
import InputProperties from "../components/input/inputProperties";
import selectBoxProperties from "../components/select-box/SelectBoxProperties";
import textAreaProperties from "../components/textarea/TextAreaProperties";
import Volunteer from "../Domains/Volunteer/Volunteer";

export default class VolunteerForm {

    private disabledInput: any = true;

    public volunteerForm = new FormGroup({})

    public firstName: InputProperties;
    
    public midName: InputProperties;
    
    public lastName: InputProperties;

    public nickName: InputProperties;

    public birthDate: InputProperties;

    public phoneNumber: InputProperties;

    public nationalID: InputProperties;

    public gender: selectBoxProperties;

    public university: InputProperties;

    public faculty: InputProperties;

    public presentCount: InputProperties;

    public callsCount: InputProperties;

    public ensureCount: InputProperties;

    public responseCount: InputProperties;

    public joiningDate: InputProperties;

    public age: InputProperties;

    public shirt: selectBoxProperties;

    public branch: selectBoxProperties;

    public apartmentNumber: InputProperties;

    public buildingNumber: InputProperties;

    public streetName: InputProperties;

    public neighborhoodName: InputProperties;

    public governorate: selectBoxProperties;

    public comments: textAreaProperties;

    public educationLevel: selectBoxProperties;

    public miniCamp: selectBoxProperties;

    initializeFormInputs() {
        this.firstName = {
            label: 'الأسم الأول',
            type: 'text',
            errorMessage: 'برجاء التأكد من الأسم الأول',
            placeHolder: 'الأسم الأول',
            formControlName: 'firstName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }
        
        this.midName = {
            label: 'الأسم الاوسط',
            type: 'text',
            errorMessage: 'برجاء التأكد من الأسم الأوسط',
            placeHolder: 'الأسم الاوسط',
            formControlName: 'midName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }
        
        this.lastName = {
            label: 'الأسم الأخير',
            type: 'text',
            errorMessage: 'برجاء التأكد من الأسم الأخير',
            placeHolder: 'الأسم الأخير',
            formControlName: 'lastName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.nickName = {
            label: 'الأسم المستعار',
            type: 'text',
            errorMessage: 'برجاء التأكد من الأسم المستعار',
            placeHolder: 'الأسم المستعار',
            formControlName: 'nickName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.birthDate = {
            label: 'تاريخ الميلاد',
            type: 'date',
            errorMessage: 'برجاء التأكد من تاريخ الميلاد',
            placeHolder: 'تاريخ الميلاد',
            formControlName: 'birthDate',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.phoneNumber = {
            label: 'رقم الهاتف',
            type: 'text',
            errorMessage: 'برجاء التأكد من رقم الهاتف',
            placeHolder: 'رقم الهاتف',
            formControlName: 'phoneNumber',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.nationalID = {
            label: 'الرقم القومي',
            type: 'number',
            errorMessage: 'برجاء التأكد من الرقم القومي ان يكون 14 رقم',
            placeHolder: 'الرقم القومي',
            formControlName: 'nationalID',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.gender = {
            label: 'النوع',
            formControlName: 'gender',
            formGroup: this.volunteerForm,
            defaultValue: this.volunteerForm.controls['gender'].value,
            options: [
                {
                    text: 'ذكر',
                    value: 0
                },
                {
                    text: 'انثي',
                    value: 1
                }
            ],
            disabled: this.disabledInput,
            objectDefine:{
                text: 'text',
                value: 'value'
            }
        }

        this.university = {
            label: 'الجامعة',
            type: 'text',
            errorMessage: 'برجاء التأكد من الجماعة',
            placeHolder: 'الجامعة',
            formControlName: 'university',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.faculty = {
            label: 'الكلية',
            type: 'text',
            errorMessage: 'برجاء التأكد من الكلية',
            placeHolder: 'الكلية',
            formControlName: 'faculty',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.presentCount = {
            label: 'عدد مرات الحضور',
            type: 'number',
            errorMessage: 'برجاء التأكد من عدد مرات الحضور',
            placeHolder: 'عدد مرات الحضور',
            formControlName: 'presentCount',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.callsCount = {
            label: 'عدد المكالمات',
            type: 'number',
            errorMessage: 'برجاء التأكد من عدد المكالمات',
            placeHolder: 'عدد المكالمات',
            formControlName: 'callsCount',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.ensureCount = {
            label: 'عدد التاكيد',
            type: 'number',
            errorMessage: 'برجاء التأكد من عدد التاكيد',
            placeHolder: 'عدد التاكيد',
            formControlName: 'ensureCount',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.responseCount = {
            label: 'عدد مرات الرد',
            type: 'number',
            errorMessage: 'برجاء التأكد من عدد مرات الرد',
            placeHolder: 'عدد مرات الرد',
            formControlName: 'responseCount',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.joiningDate = {
            label: 'تاريخ الانضمام',
            type: 'date',
            errorMessage: 'برجاء التأكد من تاريخ الانضمام',
            placeHolder: 'تاريخ الانضمام',
            formControlName: 'joiningDate',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.age = {
            label: 'العمر',
            type: 'text',
            errorMessage: 'برجاء التأكد من العمر',
            placeHolder: 'العمر',
            formControlName: 'age',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.shirt = {
            label: 'تي شيرت',
            formControlName: 'shirt',
            formGroup: this.volunteerForm,
            defaultValue: this.volunteerForm.controls['shirt'].value,
            options: [
                {
                    text: 'نعم',
                    value: 1
                },
                {
                    text: 'لا',
                    value: 2
                },
                {
                    text: 'يرغب',
                    value: 3
                }
            ],
            disabled: this.disabledInput,
            objectDefine: {
                text: 'text',
                value: 'value'
            }
        }

        this.branch = {
            label: 'الفرع',
            formControlName: 'branch',
            formGroup: this.volunteerForm,
            defaultValue: this.volunteerForm.controls['branch'].value,
            options: JSON.parse(localStorage.getItem('branches')),
            disabled: this.disabledInput,
            objectDefine:{
                text: "name",
                value: "id"
            }
        }

        this.apartmentNumber = {
            label: 'رقم الشقة',
            type: 'number',
            errorMessage: 'برجاء التأكد من رقم الشقة',
            placeHolder: 'رقم الشقة',
            formControlName: 'apartmentNumber',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.buildingNumber = {
            label: 'رقم العمارة',
            type: 'number',
            errorMessage: 'برجاء التأكد من رقم العمارة',
            placeHolder: 'رقم العمارة',
            formControlName: 'buildingNumber',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.streetName = {
            label: 'اسم الشارع',
            type: 'text',
            errorMessage: 'برجاء التأكد من اسم الشارع',
            placeHolder: 'اسم الشارع',
            formControlName: 'streetName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.neighborhoodName = {
            label: 'اسم الحي',
            type: 'text',
            errorMessage: 'برجاء التأكد من اسم الحي',
            placeHolder: 'اسم الحي',
            formControlName: 'neighborhoodName',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput
        }

        this.governorate = {
            label: 'اسم المحافظة',
            formControlName: 'governorate',
            formGroup: this.volunteerForm,
            defaultValue: this.volunteerForm.controls['governorate'].value,
            options: JSON.parse(localStorage.getItem('governorates')),
            disabled: this.disabledInput,
            objectDefine: {
                text: 'name',
                value: 'id'
            }
        }

        this.comments = {
            label: 'التعليقات (اختياري)',
            errorMessage: 'برجاء التأكد من التعليقات',
            formGroup: this.volunteerForm,
            formControlName: 'comments',
            placeHolder: 'ادخل التعليقات',
            disabled: this.disabledInput
        }

        this.educationLevel = {
            label: 'مستوي التعليم',
            formControlName: 'educationLevel',
            formGroup: this.volunteerForm,
            disabled: this.disabledInput,
            defaultValue: this.volunteerForm.controls['educationLevel'].value,
            options: JSON.parse(localStorage.getItem('educationLevel')),
            objectDefine: {
                text: 'name',
                value: 'id'
            }
        }

        this.miniCamp = {
            label: 'ميني كامب',
            formControlName: 'miniCamp',
            formGroup: this.volunteerForm,
            defaultValue: this.volunteerForm.controls['miniCamp'].value,
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
    }

    initializeViewForm(volunteerData: Volunteer) {
        if (volunteerData == undefined) return false;
        this.disabledInput = true;
        this.volunteerForm = new FormGroup({
            firstName: new FormControl(volunteerData['firstName']),
            midName: new FormControl(volunteerData['midName']),
            lastName: new FormControl(volunteerData['lastName']),
            nickName: new FormControl(volunteerData.nickName),
            birthDate: new FormControl(volunteerData.birthDate),
            nationalID: new FormControl(volunteerData.nationalId),
            gender: new FormControl(volunteerData.gender),
            university: new FormControl(volunteerData.university),
            faculty: new FormControl(volunteerData.faculty),
            phoneNumber: new FormControl(volunteerData.phoneNumber),
            joiningDate: new FormControl(volunteerData.joinDate),
            age: new FormControl(volunteerData.age),
            shirt: new FormControl(volunteerData.shirt.id),
            branch: new FormControl(volunteerData.branch.id),
            apartmentNumber: new FormControl(volunteerData.address.apartmentNumber),
            buildingNumber: new FormControl(volunteerData.address.buildingNumber),
            streetName: new FormControl(volunteerData.address.streetName),
            neighborhoodName: new FormControl(volunteerData.address.regionName),
            governorate: new FormControl(volunteerData.address.capital.id),
            presentCount: new FormControl(volunteerData.volunteerKPI?.presentCount || 0),
            callsCount: new FormControl(volunteerData.volunteerKPI?.callsCount || 0),
            ensureCount: new FormControl(volunteerData.volunteerKPI?.ensureCount|| 0),
            responseCount: new FormControl(volunteerData.volunteerKPI?.responseCount || 0),
            comments: new FormControl(volunteerData.comments|| ''),
            educationLevel: new FormControl(volunteerData.educationLevel.id),
            miniCamp: new FormControl(volunteerData.miniCamp)
        })
        this.initializeFormInputs();
    }

    initializeAddForm() {
        this.disabledInput = false;
        this.volunteerForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            midName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            nickName: new FormControl('', [Validators.required]),
            birthDate: new FormControl('', [Validators.required]),
            nationalID: new FormControl('', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]),
            gender: new FormControl(0, [Validators.required]),
            university: new FormControl('', [Validators.required]),
            faculty: new FormControl('', [Validators.required]),
            phoneNumber: new FormControl('', [Validators.required]),
            joiningDate: new FormControl('', [Validators.required]),
            /* age: new FormControl('', [Validators.required]), */
            shirt: new FormControl(1, [Validators.required]),
            branch: new FormControl(1, [Validators.required]),
            apartmentNumber: new FormControl('', [Validators.required]),
            buildingNumber: new FormControl('', [Validators.required]),
            streetName: new FormControl('', [Validators.required]),
            neighborhoodName: new FormControl('', [Validators.required]),
            governorate: new FormControl(1, [Validators.required]),
            presentCount: new FormControl(0, [Validators.required]),
            callsCount: new FormControl(0, [Validators.required]),
            ensureCount: new FormControl(0, [Validators.required]),
            responseCount: new FormControl(0, [Validators.required]),
            comments: new FormControl(''),
            educationLevel: new FormControl(1, [Validators.required]),
            miniCamp: new FormControl(false, [Validators.required])
        })
        this.initializeFormInputs();
    }

    initializeEditForm(volunteerData:Volunteer) {
        this.disabledInput = false;
        this.volunteerForm = new FormGroup({
            firstName: new FormControl(volunteerData.firstName, [Validators.required]),
            midName: new FormControl(volunteerData.midName, [Validators.required]),
            lastName: new FormControl(volunteerData.lastName, [Validators.required]),
            nickName: new FormControl(volunteerData.nickName, [Validators.required]),
            birthDate: new FormControl(volunteerData.birthDate, [Validators.required]),
            nationalID: new FormControl(volunteerData.nationalId, [Validators.required, Validators.maxLength(13), Validators.minLength(13)]),
            gender: new FormControl(volunteerData.gender, [Validators.required]),
            university: new FormControl(volunteerData.university, [Validators.required]),
            faculty: new FormControl(volunteerData.faculty, [Validators.required]),
            phoneNumber: new FormControl(volunteerData.phoneNumber, [Validators.required]),
            joiningDate: new FormControl(volunteerData.joinDate, [Validators.required]),
            /* age: new FormControl(volunteerData.age, [Validators.required]), */
            shirt: new FormControl(volunteerData.shirt.id, [Validators.required]),
            branch: new FormControl(volunteerData.branch.id, [Validators.required]),
            apartmentNumber: new FormControl(volunteerData.address.apartmentNumber, [Validators.required]),
            buildingNumber: new FormControl(volunteerData.address.buildingNumber, [Validators.required]),
            streetName: new FormControl(volunteerData.address.streetName, [Validators.required]),
            neighborhoodName: new FormControl(volunteerData.address.regionName, [Validators.required]),
            governorate: new FormControl(volunteerData.address.capital.id, [Validators.required]),
            //presentCount: new FormControl(volunteerData.volunteerKPI?.presentCount, [Validators.required]),
            //callsCount: new FormControl(volunteerData.volunteerKPI?.callsCount, [Validators.required]),
            //ensureCount: new FormControl(volunteerData.volunteerKPI?.ensureCount, [Validators.required]),
            //responseCount: new FormControl(volunteerData.volunteerKPI?.responseCount, [Validators.required]),
            comments: new FormControl(volunteerData.comments),
            educationLevel: new FormControl(volunteerData.educationLevel.id, [Validators.required]),
            miniCamp: new FormControl(volunteerData.miniCamp, [Validators.required])
        })
        this.initializeFormInputs();
    }

    getVolunteerObject(id=null) {
        let volunteer: Volunteer = {
            id: id,
            age: null,
            address: {
                id: null,
                capital: {
                    id: this.volunteerForm.controls['governorate'].value,
                    name: null
                },
                additionalInfo: null,
                apartmentNumber: this.volunteerForm.controls['apartmentNumber'].value,
                buildingNumber: this.volunteerForm.controls['buildingNumber'].value,
                streetName: this.volunteerForm.controls['streetName'].value,
                regionName: this.volunteerForm.controls['neighborhoodName'].value
            },
            faculty: this.volunteerForm.controls['faculty'].value,
            nationalId: this.volunteerForm.controls['nationalID'].value,
            university: this.volunteerForm.controls['university'].value,
            firstName: this.volunteerForm.controls['firstName'].value,
            lastName: this.volunteerForm.controls['lastName'].value,
            midName: this.volunteerForm.controls['midName'].value,
            nickName: this.volunteerForm.controls['nickName'].value,
            phoneNumber: this.volunteerForm.controls['phoneNumber'].value,
            joinDate: this.volunteerForm.controls['joiningDate'].value,
            birthDate: this.volunteerForm.controls['birthDate'].value,
            shirt: {'id' :this.volunteerForm.controls['shirt'].value},
            miniCamp: this.volunteerForm.controls['miniCamp'].value,
            volunteerKPI: {
                id: null,
                callsCount: null,
                presentCount: null,
                ensureCount: null,
                responseCount: null,
                volunteer: null,
            },
            user: null,
            branch: {
                id: this.volunteerForm.controls['branch'].value,
                name: null,
                volunteers: null
            },
            networkType: {
                id: null,
                name: null
            },
            role: {
                id: null,
                name: null, 
                volunteers: null
            },
            privileges: null,
            gender: this.volunteerForm.controls['gender'].value,
            comments: this.volunteerForm.controls['comments'].value,
            educationLevel: {
                id: this.volunteerForm.controls['educationLevel'].value,
                name: ''
            },
            organization: {
                name: null,
                id: null
            }
        }
        return volunteer;
    }
}