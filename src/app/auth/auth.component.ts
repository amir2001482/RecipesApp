import { NgForm } from '@angular/forms';
import { Component } from "@angular/core";
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector : "app-auth" ,
  templateUrl : "./auth.component.html",
})
export class AuthComponent{

    isLoginMode = true;
    isLoading = false;
    erorr  : string = "";
    constructor(private authService : AuthService){}


    onSwichMode(){

      this.isLoginMode = !this.isLoginMode;
    }

    onSubmitt(form : NgForm){

      if( !form.valid)
      return ;
      const email  = form.value.email;
      const password = form.value.password;
      this.isLoading = true;
      let authObs : Observable<AuthResponseData>;

      if(this.isLoginMode){

        authObs = this.authService.logIn(email , password)
      }
      else{

        authObs =  this.authService.singUp(email , password)
      }
      
      authObs.subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      } , erorrMassege => {
        this.erorr = erorrMassege;
        console.log(erorrMassege);
        this.isLoading = false;

      });
      form.reset();
    }




}
