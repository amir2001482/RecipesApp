import { Component, OnInit } from '@angular/core';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {


  constructor(private recipeService: recipeService)
  {

  }

  ngOnInit() {
  }

}
