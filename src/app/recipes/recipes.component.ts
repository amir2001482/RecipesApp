import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor(private recipeService: recipeService)
  {

  }

  ngOnInit() {
  }

}
