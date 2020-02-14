import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { PaymentDetailComponent } from './payment/payment-detail/payment-detail.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentCreationComponent } from './payment/payment-creation/payment-creation.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: AccountCreateComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'account-detail/:id', component: AccountDetailComponent },
  { path: 'create-payment', component: PaymentCreationComponent },
  { path: 'payment-list', component: PaymentListComponent },
  { path: 'payment-detail/:id', component: PaymentDetailComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
