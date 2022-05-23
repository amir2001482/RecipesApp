import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  constructor(private recipe: recipeService , private router : Router , private route : ActivatedRoute) {

  }

  ngOnInit(){

    this.recipes = this.recipe.onGetRecipe();
    return this.recipe;

  }
  onAddRecipe(){

    this.router.navigate(["new"] , {relativeTo : this.route });
  }

  }

