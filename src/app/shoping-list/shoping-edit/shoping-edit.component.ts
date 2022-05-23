import { Component, OnDestroy, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../Ingredient';
import { shoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit , OnDestroy {

  subscription? : Subscription;
  editMode = false;
  editingItemIndex? : number;
  constructor(private slService: shoppingListService)
  {

  }

  onAddIngredient(form : NgForm)
  {
      const values = form.value;
      const newIngredient = new Ingredient(values.name, values.amount);
      this.slService.addIngredient(newIngredient);
  }
  ngOnInit() {

     this.subscription = this.slService.startedEditingItem.subscribe(
       (index : number) => {
         this.editMode = true;
         this.editingItemIndex = index;
       }
     )

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
