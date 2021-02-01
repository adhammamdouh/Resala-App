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
  onSubmit(){
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
    var myModel = document.getElementById('exampleModal');
    debugger;
  }
}
