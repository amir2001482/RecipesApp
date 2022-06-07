import { AuthInterciptor } from './auth/auth-intercipter.service';
import { dataStorgeService } from './Shared/data-storge.service';
import { NgModule } from "@angular/core";
import { recipeService } from "./recipes/recipe.service";
import { shoppingListService } from "./shoping-list/shopping-list.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers : [
    shoppingListService ,
    recipeService ,
    dataStorgeService ,
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterciptor , multi : true}
  ]
})
export class CoreModule{

}
