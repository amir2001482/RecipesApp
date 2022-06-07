import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { appRouters } from "../app-routers.module";
import { SharedModule } from "../Shared/shared.module";
import { ShoppingListModule } from "../shoping-list/shopping-list.module";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesComponent } from "./recipes.component";

@NgModule({
  declarations : [
     RecipesComponent,
     RecipeListComponent,
     RecipesDetailComponent,
     RecipeItemComponent,
     RecipeStartComponent,
     RecipeEditComponent
  ] ,

  imports : [

    appRouters ,
    FormsModule ,
    ReactiveFormsModule,
    RecipeRoutingModule ,
    ShoppingListModule ,
    SharedModule
  ] ,
  exports : [

  ]
})
export class RecipeModule{

}
