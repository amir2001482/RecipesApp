import { User } from './../auth/user.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { dataStorgeService } from '../Shared/data-storge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent implements OnInit , OnDestroy {

    User? : Subscription;
    isAuthenticated = false;
    constructor(private storgeSrvice : dataStorgeService , private authService : AuthService){

    }


    ngOnInit() {

        this.User = this.authService.userInfo.subscribe(userdata => {
          if(userdata){
            this.isAuthenticated = true;
          }
          else{
            this.isAuthenticated = false;
          }
        });

    }
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
      this.featureSelected.emit(feature);
    }

    onSaveData(){

        this.storgeSrvice.storeRecipes();
    }

    onFetchData(){
      this.storgeSrvice.fetchRecipes().subscribe();
    }

    onLogOut(){
      this.authService.logout();
      this.isAuthenticated = false;
    }

    ngOnDestroy() {

        this.User?.unsubscribe();
    }


}
