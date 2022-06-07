
import { NgForm } from '@angular/forms';
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {AlertComponent} from '../Shared/alert.component';
import { PlaceHolderDirective } from '../Shared/PlaceHolder.directive';

@Component({
  selector : "app-auth" ,
  templateUrl : "./auth.component.html",
})
export class AuthComponent implements OnDestroy{

    isLoginMode = true;
    isLoading = false;
    erorr  : string  = "";
    alertSub = new Subscription;
    @ViewChild(PlaceHolderDirective) alertHost : PlaceHolderDirective ;
    constructor(private authService : AuthService , private router : Router , private componentfactoryResolver : ComponentFactoryResolver){}


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
        this.isLoading = false;
        this.router.navigate(["/recipes"]);

      } ,
        erorrMassege => {
        this.erorr = erorrMassege;
        this.showErorrAlert(erorrMassege);
        console.log(erorrMassege);
        this.isLoading = false;

      });
      form.reset();
    }
    onHandelErorr(){
      this.erorr = "";
      this.router.navigate(["/auth"]);

    }

     private showErorrAlert(message : string){

       const componentFactory =  this.componentfactoryResolver.resolveComponentFactory(AlertComponent);
       const viewref = this.alertHost.viewConteinerRef;
       viewref?.clear();
       const componentRef =  viewref.createComponent(componentFactory);
       componentRef.instance.message = message;
       this.alertSub =  componentRef.instance.close.subscribe(()=> {this.alertSub.unsubscribe(); viewref.clear()});
    }

    ngOnDestroy() {

      if(this.alertSub){
        this.alertSub.unsubscribe()
      }
    }




}
