import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestMethodService } from 'src/app/Services/request-method.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading:boolean = false;
  loginForm:FormGroup;
  submitAttempt:boolean = false;
  constructor(private requestMethodService:RequestMethodService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  changeState(){
    this.loading = true;
    this.submitAttempt = true;
    if (this.loginForm.valid){
      debugger;
      this.requestMethodService.postRequest("login",{"username":this.loginForm.controls.username.value, "password": this.loginForm.controls.password.value},{}).subscribe((res:any)=>{
        
      }, (error)=>{
        this.loginForm.reset();
        this.loading = false;
      })
    }
  }
}
