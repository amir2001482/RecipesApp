import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert.component";
import { dropDownDirective } from "./Dropdown.Directive";
import { loadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./PlaceHolder.directive";
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations : [
    dropDownDirective,
    loadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective ,
  ] ,
  imports : [
    CommonModule,
    FormsModule ,
    AuthModule
  ] ,
  exports : [
    dropDownDirective,
    loadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective ,
    CommonModule
  ] ,
  entryComponents : [AlertComponent]
})
export class SharedModule{

}
