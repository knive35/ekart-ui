import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
  }
  navigateToCart(){
    this.router.navigate(['cart']);
  }
  navigateToProfile(){
    this.router.navigate(['profile']);
  }
}
