import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputProperties } from 'src/app/components/input/input-properties';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  resalaLogo = '../assets/icon/resala-logo.png';

  authForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  usernameInputProperties: InputProperties = {placeholder: '', 
                                              value: '', 
                                              iconSrc: '../assets/icon/user.svg', 
                                              title: 'LOGIN.username', 
                                              hasIcon: true, 
                                              type: 'text',
                                              disabled: false,
                                              formController: {formGroup: this.authForm, formControllerName: 'username'}}
  passwordInputProperties: InputProperties = {placeholder: '',
                                              value: '', 
                                              iconSrc: '../assets/icon/password.svg', 
                                              title: 'LOGIN.password', 
                                              hasIcon: true, 
                                              type: 'password',
                                              disabled: false,
                                              formController: {formGroup: this.authForm, formControllerName: 'password'}}

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  async submit() {
    if(this.authForm.valid) {
      await this.auth.login(this.authForm.get('username').value, this.authForm.get('password').value);
    }
  }

}
