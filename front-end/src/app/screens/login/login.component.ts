import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(privateformBuilder:FormBuilder) { 
    // this.loginForm=this.formBuilder.group({
    //   email:['',[Validators.required,Validators.email]],
    //   password:['',[Validators.required,Validators.minLength(8)]]
    // })
  }

  ngOnInit(): void {
  }

}
