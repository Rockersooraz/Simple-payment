import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accDetail;
  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.accDetail = this.apiService.getDetail(id);
    this.accDetail.subscribe(
      (data) =>{
        this.accDetail = data;
      }
    )
    
  }

}
