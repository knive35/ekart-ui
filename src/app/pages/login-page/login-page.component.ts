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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    this.router.navigate(['corousel'])
  }

}
