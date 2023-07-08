import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    ConnectComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule
  ]
})
export class ConnectModule { }
