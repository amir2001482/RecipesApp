import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { recipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap , take, exhaustMap } from "rxjs";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class dataStorgeService {

      constructor(private http : HttpClient , private recipeService : recipeService , private auth : AuthService){}

      storeRecipes() {
        const recipes = this.recipeService.onGetRecipe();
        this.http
          .put(
            'https://recipebook-834bb-default-rtdb.firebaseio.com//recipes.json',
            recipes
          )
          .subscribe(response => {
            console.log(response);
          });
      }

      fetchRecipes() {
        return this.http
          .get<Recipe[]>(
            'https://recipebook-834bb-default-rtdb.firebaseio.com//recipes.json'
          )
          .pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              });
            }),
            tap(recipes => {
              this.recipeService.setRecipesArray(recipes);
            })
          );
      }

}
