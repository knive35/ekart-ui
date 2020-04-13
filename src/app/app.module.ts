import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CarouselModule} from 'primeng/carousel';
//import { CorouselComponentComponent } from './components/corousel/corousel-component/corousel-component.component';
import { CorouselComponent } from './components/corousel/corousel.component';
@NgModule({
  declarations: [
    AppComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
