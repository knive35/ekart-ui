import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public router:Router, public service:ApiService ) { }

  ngOnInit(): void {
  }
  productPage(){
    this.router.navigate(['product']);
    this.service.getAllCustomeres().subscribe(data=>{
      console.log(data);
    })
    
  }

}
