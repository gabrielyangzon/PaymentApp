import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

import {Observable , of  , catchError} from 'rxjs'


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    "Access-Control-Allow-Methods" : "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": '*'
  })
 }

@Injectable({
  providedIn: 'root'
})
export class DataService {

   BASE_URL : string = "http://localhost:5001/api/"

  constructor(private http: HttpClient) { }
 

  getPayments() : Observable<PaymentDetail[]>{
    return this.http.get<PaymentDetail[]>(
      this.BASE_URL + "PaymentDetails" ,
      httpOptions).pipe()
  }

  deletePayment(id : number) : Observable<boolean> {

    this.http.delete(this.BASE_URL + "PaymentDetails/"+id , httpOptions).pipe()

    return of(false)
  }
  
}
