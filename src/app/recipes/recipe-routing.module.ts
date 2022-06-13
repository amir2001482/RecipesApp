import { NgModule } from "@angular/core";
import { RouterModule  ,Routes} from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { AuthGurdService } from '../auth/auth-gurd';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { recipeResloverService } from './recipes-reslover';

const routers  : Routes = [
  { path: "", component: RecipesComponent , canActivate : [AuthGurdService] , children : [
    {path: "" ,component: RecipeStartComponent},
    {path :"new" , component:RecipeEditComponent},
    {path:":id" , component:RecipesDetailComponent , resolve : [recipeResloverService]},
    {path : ":id/edit" , component: RecipeEditComponent }

  ]},
]
@NgModule({

  imports : [RouterModule.forChild(routers)] ,
  exports : [RouterModule]
})
export class RecipeRoutingModule {

}
