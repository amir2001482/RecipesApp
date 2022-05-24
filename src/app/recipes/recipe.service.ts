import { Recipe } from "./recipe.model";
import { Ingredient } from '../Shared/Ingredient';
import { shoppingListService } from "../shoping-list/shopping-list.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class recipeService
{
  changedRecipes = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  constructor(private slService: shoppingListService){

  }
  onGetRecipe(){

    return this.recipes.slice();

  }
  AddIngredientdtoShoppingList(ingredients: Ingredient[]){
    this.slService.AddIngredientsFromRecipe(ingredients);
  }
  getRecipeById(index : number){

    return this.recipes[index];
  }
  addRecipe(recipe : Recipe){

    this.recipes.push(recipe);
    this.changedRecipes.next(this.recipes.slice());

  }
  updateRecipe(index : number , newRecipe : Recipe){

    this.recipes[index] = newRecipe;
    this.changedRecipes.next(this.recipes.slice());

  }

  deleteRecipe(index : number){

    this.recipes.splice(index , 1);
    this.changedRecipes.next(this.recipes.slice());
  }


}
