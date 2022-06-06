import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable , map, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn : "root"})
export class AuthGurdService implements CanActivate{

  constructor(private auth : AuthService , private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.auth.userInfo.pipe( take(1), map( userData => {

      const isAUth = !! userData;
      if(isAUth){
        return true;
      }
      return this.router.createUrlTree(["/auth"]);

      }))

  }

}
