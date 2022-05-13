import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestChildComponent } from './login/test-child/test-child.component';

console.warn("Admin module loaded");
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
