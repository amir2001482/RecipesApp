import { Subscription } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit , OnDestroy {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  subscription = new Subscription
  constructor(private recipeService: recipeService , private router : Router , private route : ActivatedRoute) {

  }

  ngOnInit(){


    this.subscription =  this.recipeService.changedRecipes.subscribe(
      (recipes : Recipe[]) => this.recipes = recipes
    );
    this.recipes = this.recipeService.onGetRecipe();



  }
  onAddRecipe(){

    this.router.navigate(["new"] , {relativeTo : this.route });
  }
  ngOnDestroy(): void {

      this.subscription.unsubscribe();
  }

}

