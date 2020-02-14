  import { ApiserviceService } from './../../apiservice.service';
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-payment-list',
    templateUrl: './payment-list.component.html',
    styleUrls: ['./payment-list.component.css']
  })
  export class PaymentListComponent implements OnInit {

    payment:any = [];

    constructor(private apiService: ApiserviceService, private router: Router) { }

    ngOnInit(){
      this.apiService.getPayments()
      .subscribe(
        (data) =>{
          this.payment = data;
          console.log(this.payment);
          
        }
      )
    }

    onSelect(pay){
      this.router.navigate(['payment-detail',pay.id]);
      console.log(pay.id);
      
    }

  }
