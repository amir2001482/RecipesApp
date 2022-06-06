import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take , exhaustMap} from "rxjs";

@Injectable()
export class AuthInterciptor implements HttpInterceptor{

  constructor(private auth : AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.userInfo.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        if(user.token != null){
          const modifiedReq = req.clone({
            params: new HttpParams().set('auth', user.token)
          });
          return next.handle(modifiedReq);
        }
        else{
          return  next.handle(req);
        }


      })
    );
  }
}
