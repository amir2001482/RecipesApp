import {BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRouters } from './app-routers.module';
import { HttpClientModule} from '@angular/common/http';
import { RecipeModule } from './recipes/recipe.module';
import { SharedModule } from './Shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
  ],
  imports: [
    BrowserModule,
    appRouters,
    HttpClientModule,
    RecipeModule ,
    SharedModule ,
    CoreModule ,
    AuthModule

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
