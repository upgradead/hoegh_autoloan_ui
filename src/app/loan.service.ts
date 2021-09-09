import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoanResponse } from './loanresponse';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  _url = 'http://localhost:8080/loan'
  constructor(private _http: HttpClient) { }

  loan(loanData: any){
     return this._http.post<LoanResponse[]>(this._url, loanData)
  }
}
