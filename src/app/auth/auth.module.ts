import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations : [
    AuthComponent ,
  ],
  imports : [
    RouterModule.forChild([ {path: "auth" , component : AuthComponent}]),
    SharedModule ,
    CommonModule
  ]

})
export class AuthModule{

}
