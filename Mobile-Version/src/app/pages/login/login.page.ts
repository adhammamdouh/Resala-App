import { Component, OnInit } from '@angular/core';
import { InputProperties } from 'src/app/components/input/input-properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  resalaLogo = '../assets/icon/resala-logo.png';

  usernameInputProperties: InputProperties = {placeholder: 'LOGIN.username', value: '', iconSrc: '../assets/icon/user.svg', title: ''}
  passwordInputProperties: InputProperties = {placeholder: 'LOGIN.password', value: '', iconSrc: '../assets/icon/user.svg', title: ''}
  constructor() { }

  ngOnInit() {
  }

}
