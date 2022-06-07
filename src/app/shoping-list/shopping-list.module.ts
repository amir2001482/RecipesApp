import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { appRouters } from "../app-routers.module";
import { ShopingEditComponent } from "./shoping-edit/shoping-edit.component";
import { ShopingListComponent } from "./shoping-list.component";
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations : [

    ShopingListComponent,
    ShopingEditComponent
  ] ,

  imports : [
    appRouters ,
    FormsModule ,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: "shopping-list", component: ShopingListComponent },
    ])
  ]
})
export class ShoppingListModule {

}
