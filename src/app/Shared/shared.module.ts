import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { AlertComponent } from "./alert.component";
import { dropDownDirective } from "./Dropdown.Directive";
import { loadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./PlaceHolder.directive";

@NgModule({
  declarations : [
    dropDownDirective,
    loadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective ,
  ] ,
  imports : [
    CommonModule,
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
