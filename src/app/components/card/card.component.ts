import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import { of } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:Array<any>;
  constructor(public router:Router, public service:ApiService ) { }

  ngOnInit(): void {
    this.products=["a","b","c","d","e","f","g","h","i","j","k","l"];
  }
  
  

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }


  fakeValidateUserData() {
    return of({
      userDate1: 1,
      userData2: 2
    });
  }

  //

  
  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report',
        text: JSON.stringify(res)
      });
    });

  }

  dynamicDownloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report.json',
        text: JSON.stringify(res)
      });
    });
  }
  
  

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
  productPage(){
    this.router.navigate(['product']);
    this.service.getAllCustomeres().subscribe(data=>{
      console.log(data);
    })
    
  }

}