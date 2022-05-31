import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { recipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";
@Injectable()
export class dataStorgeService {

      constructor(private http : HttpClient , private recipeService : recipeService){}

      storRecipe(){

         const recipes = this.recipeService.recipes;
          this.http.put("https://recipebook-834bb-default-rtdb.firebaseio.com/recipes.json" , recipes).subscribe(response => {
            console.log(response);
          });
      }

      fetchRecipes(){

           return this.http.get<Recipe[]>("https://recipebook-834bb-default-rtdb.firebaseio.com/recipes.json")
           .pipe(
               map( recipes => {
                  return recipes.map( recipe => {
                  return {...recipe , ingredient : recipe.ingredients ? recipe.ingredients : []};
                                                                                            });
                 }),
               tap(recipes => {
                   this.recipeService.setRecipesArray(recipes);
                  }))
      }

}
