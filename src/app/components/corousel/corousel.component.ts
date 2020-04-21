import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
//import { MbscCardOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

items:Array<any>=[];
constructor(){
  //you can get this array from db as well
  this.items=[
    {name:"./../../../assets/images/thumb1.jpg"},
    {name:"./../../../assets/images/thumb2.jpg"},
    {name:"./../../../assets/images/thumb3.jpg"},
    {name:"./../../../assets/images/thumb4.jpg"},
    {name:"./../../../assets/images/thumb5.jpg"},
    {name:"./../../../assets/images/thumb6.jpg"},
    {name:"./../../../assets/images/thumb7.jpg"},
  ]
}
ngOnInit() {}
}
