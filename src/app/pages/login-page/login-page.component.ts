import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formSettings = {
    theme: 'mobiscroll'
};

  constructor(public router:Router) { }

  ngOnInit(): void {

  }
  
  
  register(){
    let x=document.getElementById("login");
    let y=document.getElementById("register");
    let z=document.getElementById("btn");
    console.log(x);
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
  }
  login(){
    let x=document.getElementById("login");
    let y=document.getElementById("register");
    let z=document.getElementById("btn");
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
  }

}
