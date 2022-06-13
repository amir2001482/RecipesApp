import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations : [

    AuthComponent

  ],
  imports : [
    RouterModule.forChild([ {path: "" , component : AuthComponent}]),
    SharedModule ,
    CommonModule,
    FormsModule
  ],
})
export class AuthModule{

}
