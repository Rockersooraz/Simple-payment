import { Router } from '@angular/router';
import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  account: any = [];

  acc = new Account();

  constructor(private apiService: ApiserviceService,private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

 

  onSubmit() {
    return this.apiService.postAccount(this.acc)
     .subscribe(
       (data) =>{
         this.account.push(data); 
        //  console.log(data);
         this.toaster.success('Account created successfully');
         this.router.navigate(['/account-list'])
       },
       error => {
         this.toaster.error('Something went wrong','Error Occur', { timeOut: 4000})
     }
     
  )}


}
