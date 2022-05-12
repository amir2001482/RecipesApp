import { Component, OnInit } from '@angular/core';
import { shoppingListService } from './shopping-list.service';
import { Ingredient } from '../Shared/Ingredient';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit
{
  Ingredients: Ingredient[] = [];
  constructor(private slService: shoppingListService)
  {
    
  }
  ngOnInit(): void
  {
    this.Ingredients = this.slService.getIngredient();
    this.slService.changedIngredient.subscribe((ingredients: Ingredient[]) => {
      this.Ingredients = ingredients;
    }) 
      
    }
  }



