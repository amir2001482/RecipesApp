import {  } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from "../recipe.model"
import { recipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
   recipe : Recipe;
   id : number;

  constructor(private recipeService: recipeService , private ActiveRoute : ActivatedRoute , private router : Router)
  {

  }

  ngOnInit(): void
  {

    this.ActiveRoute.params.subscribe(
      (params : Params) => {
        this.id = +params["id"];
        this.recipe =  this.recipeService.getRecipeById(this.id);
      }
    )
  }
  onAddToShoppingList()
  {
    this.recipeService.AddIngredientdtoShoppingList(this.recipe.ingredient);
  }
  onEditRecipe(){

    this.router.navigate(["edit"] , {relativeTo : this.ActiveRoute});
  }

}
