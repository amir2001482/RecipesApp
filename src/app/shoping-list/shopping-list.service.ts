import { Ingredient } from '../Shared/Ingredient';
import { EventEmitter } from '@angular/core';

export class shoppingListService
{
  constructor()
  {

  }
  changedIngredient = new EventEmitter<Ingredient[]>();
  Ingredients: Ingredient[] = [
    new Ingredient("apple", 10),
    new Ingredient("oil", 2)
  ];
  addIngredient(ingredient: Ingredient)
  {
    this.Ingredients.push(ingredient);
    this.changedIngredient.emit(this.Ingredients.slice());
  }
  getIngredient()
  {
    return this.Ingredients.slice();
  }
  AddIngredientsFromRecipe(ingredients: Ingredient[])
  {
    this.Ingredients.push(...ingredients);
    this.changedIngredient.emit(this.Ingredients);
  }
}
