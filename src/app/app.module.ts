import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { PaymentCreationComponent } from './payment/payment-creation/payment-creation.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentDetailComponent } from './payment/payment-detail/payment-detail.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountCreateComponent,
    AccountDetailComponent,
    PaymentCreationComponent,
    PaymentListComponent,
    PaymentDetailComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
