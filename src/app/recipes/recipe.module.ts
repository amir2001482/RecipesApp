
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipe-list/recipe-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../Shared/shared.module";
import { CommonModule } from "@angular/common";



@NgModule({
  declarations : [
     RecipesComponent,
     RecipesListComponent,
     RecipesDetailComponent,
     RecipeItemComponent,
     RecipeStartComponent,
     RecipeEditComponent,

  ] ,

  imports : [

    ReactiveFormsModule,
    RecipeRoutingModule ,
    SharedModule,
    RouterModule,
    CommonModule
  ] ,
  exports : [


  ]
})
export class RecipeModule{

}
