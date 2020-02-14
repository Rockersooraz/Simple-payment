  import { Account } from './account';
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
  import { catchError } from 'rxjs/operators';
  import { throwError } from 'rxjs'

  @Injectable({
    providedIn: 'root'
  })
  export class ApiserviceService {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 
    
    apiURL = 'http://localhost:8080/payments-system/';

    constructor(private http: HttpClient) { }

    //Account related service methods

    getAccount(){
      return this.http.get<Account>(this.apiURL + '/account')
      .pipe(catchError(this.erroHandler));
    }

    postAccount(account){
      return this.http.post(this.apiURL + '/account/add/', account, this.httpOptions)
      .pipe(catchError(this.erroHandler));
    }

    getDetail(id){
      return this.http.get(this.apiURL+'/account/' + id)
      .pipe(catchError(this.erroHandler));   
    }
    
  //Payment related service methods
    getPayments(){
      return this.http.get(this.apiURL + '/payment')
      .pipe(catchError(this.erroHandler));
    }

    sendPayment(amount){
      return this.http.post(this.apiURL + '/payment/add/', amount, this.httpOptions)
      .pipe(catchError(this.erroHandler));
    }

    getPaymentDetails(id){
      return this.http.get(this.apiURL + '/payment/'+ id)
      .pipe(catchError(this.erroHandler));
    }


    //errorhandling for badresponse from API

    erroHandler(errorResponse:HttpErrorResponse){
      if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    return  throwError('There is a problem with the service.Please try again later');
  }
    


  }
