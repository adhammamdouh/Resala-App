import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Controllers/auth/auth.service';
import User from 'src/app/Domains/User';
import { ErrorHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
import { FormService } from 'src/app/Services/form.service';
import *  as  FrontEndErrors from '../../SharedData/FrontEndErrors.json';
import { Router } from '@angular/router';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';

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
    private alertHandler: ErrorHandlerService,
    private formService: FormService,
    private router:Router,
    private privilegeHandler: PrivilegeHandlerService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    this.formService.markFormGroupTouched(this.loginForm);
    if (this.loginForm.controls.username.errors?.required)
      this.displayLoginError(FrontEndErrors.invalidLoginUsername);
    else if (this.loginForm.controls.password.errors?.required)
      this.displayLoginError(FrontEndErrors.invalidPassword);
    else {
      this.authService.authorize(this.getUserData()).subscribe((res: any) => {
        let token = this.authService.parseJwt(res.message.token);
        this.authService.setToken(res.message.token);
        localStorage.setItem('privileges',JSON.stringify(this.getPrivilegesArray(token.aud)));
        this.authService.setUser(token);
        this.router.navigate(['loading'])
      }, (msg: any) => {
        this.displayLoginError(msg);
      });
    }
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,
      Validators.minLength(0)]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(0),
      Validators.maxLength(32)])
    })
  }

  displayLoginError(error: any) {
    this.alertHandler.handleError(error);
  }

  getUserData(): User {
    let user: User = {
      userName: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    return user;
  }

  getPrivilegesArray(privileges: string) {
    privileges = privileges.replace(/\[/g, '');
    privileges = privileges.replace(/]/g, '');
    privileges = privileges.replace(/ +/g, '');
    const privilegesArr = privileges.split(',');

    return privilegesArr;
  }

}
