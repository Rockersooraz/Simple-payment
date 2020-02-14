    import { ToastrService } from 'ngx-toastr';
    import { Router } from '@angular/router';
    import { ApiserviceService } from './../../apiservice.service';
    import { Component, OnInit } from '@angular/core';
    import { Payment } from 'src/app/shared/payment';


    @Component({
      selector: 'app-payment-creation',
      templateUrl: './payment-creation.component.html',
      styleUrls: ['./payment-creation.component.css']
    })
    export class PaymentCreationComponent implements OnInit {

      payment: any =[];
      
      amount = new Payment();

    public currency = [
        "USD",
        "EURO",
        "GBP"
      ]

      constructor(private apiService: ApiserviceService, private router: Router, private toaster: ToastrService) { }

      ngOnInit() {
      }

      onSubmit(){
      return this.apiService.sendPayment(this.amount)
        .subscribe(
          (data) => {
            this.payment.push(data);
            this.toaster.success('Payment successfull');
            this.router.navigate(['/payment-list'])
          },
          error => {
            this.toaster.error('Something Went wrong','Error Occur', { timeOut: 4000})
        }
          
          );
      }

    }

      