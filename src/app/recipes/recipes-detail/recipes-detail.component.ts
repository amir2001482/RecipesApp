import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient';
import { Recipe } from "../recipe.model"
import { recipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: recipeService)
  {

  }

  ngOnInit(): void
  {

  }
  onAddToShoppingList()
  {
    this.recipeService.AddIngredientdtoShoppingList(this.recipe.ingredient);
  }

}
