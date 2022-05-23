import { Ingredient } from '../Shared/Ingredient';
import { Subject } from 'rxjs';

export class shoppingListService
{
  startedEditingItem = new Subject<number>();
  constructor()
  {

  }
  changedIngredient = new Subject<Ingredient[]>();
  Ingredients: Ingredient[] = [
    new Ingredient("apple", 10),
    new Ingredient("oil", 2)
  ];
  addIngredient(ingredient: Ingredient)
  {
    this.Ingredients.push(ingredient);
    this.changedIngredient.next(this.Ingredients.slice());
  }
  getIngredient()
  {
    return this.Ingredients.slice();
  }
  AddIngredientsFromRecipe(ingredients: Ingredient[])
  {
    this.Ingredients.push(...ingredients);
    this.changedIngredient.next(this.Ingredients);
  }
}
