  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { ApiserviceService } from 'src/app/apiservice.service';


  @Component({
    selector: 'app-payment-detail',
    templateUrl: './payment-detail.component.html',
    styleUrls: ['./payment-detail.component.css']
  })
  export class PaymentDetailComponent implements OnInit {

  payDetail;

    constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.payDetail = this.apiService.getPaymentDetails(id);
      this.payDetail.subscribe(
        (data) =>{
          this.payDetail = data;
        }
      )
      
    }



  }
