import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { dataStorgeService } from '../Shared/data-storge.service';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';
@Injectable({providedIn : "root"})
export class recipeResloverService implements Resolve<Recipe[]> {

  constructor( private storeService : dataStorgeService , private recipeService : recipeService){}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const recipes = this.recipeService.recipes;
    if(recipes.length==0){
      return this.storeService.fetchRecipes();
    }
    return recipes;


  }

}
