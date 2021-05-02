import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestMethodService } from 'src/app/Services/request-method.service';
import * as bootstrap from 'bootstrap';
import { AlertService } from 'src/app/Services/alert.service';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { AuthService } from 'src/app/Controllers/auth/auth.service';
import User from 'src/app/Domains/User';
import { AlertHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading:boolean = false;
  loginForm:FormGroup;
  submitAttempt:boolean = false;
  user: User = {
    username: '',
    password: ''
  }
  constructor(
    private requestMethodService:RequestMethodService,
    private alertService: AlertService,
    private authService:AuthService,
    private alertHandler: AlertHandlerService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,
                                      Validators.minLength(5)]),
      password: new FormControl('', [Validators.required,
                                      Validators.minLength(8),
                                      Validators.maxLength(32)])
    })
  }
  onSubmit() {
    if(this.loginForm.invalid) {
      this.alertHandler.handleError({error: 'برجاء التأكد من اسم المستخدم وكلمة السر', statues: 404});
      return;
    }

    this.user = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.authService.authorize(this.user);
    //this.submitAttempt = true;
    /*if (this.loginForm.valid){
      this.loading = true;
      this.requestMethodService.postRequest("login",
      {
        "username": this.loginForm.controls.username.value,
        "password": this.loginForm.controls.password.value
      },
      {})
      .subscribe((res:any)=>{
        console.log("dsfdsf");
      }, (error)=>{
        this.loading = false;
      })
    }*/
    //this.alertService.showModal();
  }
}
