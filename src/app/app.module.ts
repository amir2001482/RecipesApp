import { BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRouters } from './app-routers.module';
import { SharedModule } from './Shared/shared.module';
import { CoreModule } from './core.module';
// import { AuthModule } from './auth/auth.module';
// import { RecipeModule } from './recipes/recipe.module';
// import { ShoppingListModule } from './shoping-list/shopping-list.module';


@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
  ],
  imports : [
     BrowserModule ,
    //  AuthModule,
    //  ShoppingListModule,
    //  RecipeModule,
     appRouters,
     HttpClientModule,
     SharedModule ,
     CoreModule,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
