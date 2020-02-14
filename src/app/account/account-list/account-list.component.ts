import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  account: any = [];

  constructor(private apiService: ApiserviceService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAccount()
    .subscribe(
      (data =>{
        this.account = data;
        console.log(this.account);
        
      })
    )
  }

  onSelect(account){
    this.router.navigate(['account-detail',account.id]);
  }

}
