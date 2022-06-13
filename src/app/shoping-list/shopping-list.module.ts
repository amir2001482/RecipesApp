import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { ShopingEditComponent } from "./shoping-edit/shoping-edit.component";
import { ShopingListComponent } from "./shoping-list.component";
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations : [

    ShopingListComponent,
    ShopingEditComponent
  ] ,

  imports : [

    FormsModule ,
    SharedModule,
    RouterModule.forChild([
      { path: "" , component: ShopingListComponent },
    ])
  ]
})
export class ShoppingListModule {

}
