import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Controllers/auth/auth.service';
import User from 'src/app/Domains/User';
import { AlertHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
import AlertButton from '../shared/normal-alert/alert-button';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loading: boolean = false;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private alertHandler: AlertHandlerService,
    private formService: FormService) { }
  
  ngOnInit(): void {
    this.initializeForm();
  }
  
  onSubmit():void {
    if (this.loginForm.invalid) {
      this.displayLoginError();
    } else {
      this.authService.authorize(this.getUserData());
      this.loading = true;
    }
  }

  initializeForm():void{
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,
      Validators.minLength(5)]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32)])
    })
  }

  displayLoginError(){
    let alertButtons:AlertButton[] = [
      {
        name: 'موافق',
        handler: ()=>{}
      }
    ]
    this.alertHandler.displayError("برجاء التاكد من اسم المستخدم و كلمة السر", alertButtons);
  }

  getUserData():User{
    let user:User = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    return user;
  }

}
