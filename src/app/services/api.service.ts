import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string="http://localhost:8000/"
  constructor(private http:HttpClient) { }

  public getAllCustomeres():Observable<any>{
      return this.http.get(`${this.url}`+'getAllCustomers');
  }
}
