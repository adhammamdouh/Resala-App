import { FormControl, FormGroup, Validators } from "@angular/forms";

export class EventForm {
    volunteerForm = new FormGroup({
        fullname: new FormControl('', [Validators.required]),
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
}
