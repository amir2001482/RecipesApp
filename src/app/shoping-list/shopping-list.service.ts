import { Ingredient } from '../Shared/Ingredient';
import { Subject } from 'rxjs';

export class shoppingListService
{
    changedIngredient = new Subject<Ingredient[]>();
    Ingredients: Ingredient[] = [
    new Ingredient("apple", 10),
    new Ingredient("oil", 2)
  ];
    startedEditingItem = new Subject<number>();
  constructor()
  {

  }

  addIngredient(ingredient: Ingredient)
  {
    this.Ingredients.push(ingredient);
    this.changedIngredient.next(this.Ingredients.slice());
  }
  getIngredient(){

    return this.Ingredients.slice();
  }
  AddIngredientsFromRecipe(ingredients: Ingredient[]){

    this.Ingredients.push(...ingredients);
    this.changedIngredient.next(this.Ingredients);
  }
  getIngredientByIndex(index : number){

    return this.Ingredients[index];
  }
  updateIngredient(index : number , newIngredient : Ingredient){

    this.Ingredients[index] = newIngredient;
    this.changedIngredient.next(this.Ingredients.slice());

  }
  DeleteIngredient(index : number){

    this.Ingredients.splice(index , 1);
    this.changedIngredient.next(this.Ingredients.slice());
  }
}
