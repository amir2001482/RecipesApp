import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError,tap, BehaviorSubject } from 'rxjs';
import { UserModel } from './user.model';
import { Router } from '@angular/router';


export interface AuthResponseData {
  idToken : string,
  email	 : string ,
  refreshToken	 : string,
  expiresIn : number,
  localId : string ,
  registered : boolean
}

@Injectable({providedIn : "root"})
export class AuthService{

    userInfo = new BehaviorSubject<UserModel | null>(null);
    private ExpireTimeOut : any;

    constructor(private http : HttpClient , private router : Router){}

    singUp(emial : string , password : string){

      return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLnM7fVd7yyMZzO1l0T6I0lOJpnjpwgIc" , {
        email : emial ,
        password : password,
        returnSecureToken : true

      }).pipe(catchError(this.handelErrors) , tap(resData => {

        this.handelAuthentication(
          resData.email,
          resData.localId,
          resData.idToken ,
          resData.expiresIn
          )
      } ));
    }

    logIn(email : string , password : string){

      return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLnM7fVd7yyMZzO1l0T6I0lOJpnjpwgIc" , {

        email : email ,
        password : password,
        returnSecureToken : true

      }).pipe(catchError(this.handelErrors) , tap(resData => {
        this.handelAuthentication(
          resData.email,
          resData.localId,
          resData.idToken ,
          resData.expiresIn
          )
      }));

    }

    autoLogIn(){

      const user :
      {
        email : string ,
        id : string ,
        _token : string ,
        _expireDate : string
      } =  JSON.parse(localStorage.getItem("userData") ?? "");

      if(!user){
        return
      }
      const loadedUser = new UserModel(user.email , user.id , user._token , new Date(user._expireDate));
      if(loadedUser.token){
        this.userInfo.next(loadedUser);
        const ExpireTokenDate = new Date(user._expireDate).getTime() - new Date().getTime();
        this.autoLogOut(ExpireTokenDate);
      }
    }

    private handelErrors(erorrRes : HttpErrorResponse){

        let erorrMassege = "An Erorr!!!";

        if(!erorrRes.error || !erorrRes.error.error){
          return throwError(erorrMassege);
        }

        switch(erorrRes.error.error.message){
          case "EMAIL_EXISTS":
            erorrMassege  = "Your Email is exist already";
            break;
          case "TOO_MANY_ATTEMPTS_TRY_LATER" :
            erorrMassege = "try again later";
            break;
          case "EMAIL_NOT_FOUND" :
            erorrMassege = "your Email is not exist";
            break;
          case "INVALID_PASSWORD" :
            erorrMassege = "your password or email is not found"
          }
          return throwError(erorrMassege);
    }

    private handelAuthentication(email : string , userId : string , token : string , tokenExpire : number){

      let tokenExpireDate = new Date(new Date().getTime() + +tokenExpire * 1000);
      const user = new UserModel(email , userId , token , tokenExpireDate);
      this.userInfo.next(user);
      this.autoLogOut(tokenExpire * 1000)
      localStorage.setItem("userData" , JSON.stringify(user))

    }

    logout(){
      this.userInfo.next(null);
      localStorage.removeItem("userData");
      if(this.ExpireTimeOut){
        clearTimeout(this.ExpireTimeOut);
      }
      this.ExpireTimeOut = null;
      this.router.navigate(["/auth"]);

    }
    autoLogOut(tokenExpireDate : number){

      this.ExpireTimeOut =  setTimeout( () => {this.logout()} , tokenExpireDate)

    }
}
