import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit {
//   constructor(private corouselService: CarouselService) { 
//     this.responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 3,
//             numScroll: 3
//         },
//         {
//             breakpoint: '768px',
//             numVisible: 2,
//             numScroll: 2
//         },
//         {
//             breakpoint: '560px',
//             numVisible: 1,
//             numScroll: 1
//         }
//     ];
// }

ngOnInit() {
    // this.carService.getCarsSmall().then(cars => {
    //     this.cars = cars
    // });
}
}
