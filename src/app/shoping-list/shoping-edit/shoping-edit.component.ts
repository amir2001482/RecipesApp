import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild("f") slForm? : NgForm
  subscription? : Subscription;
  editMode = false;
  editingItemIndex : number = 0;
  editedItem? : Ingredient
  constructor(private slService: shoppingListService)
  {

  }

  onAddIngredient(form : NgForm)
  {
      const values = form.value;
      const newIngredient = new Ingredient(values.name, values.amount);
      if(this.editMode){
        this.slService.updateIngredient(this.editingItemIndex ,newIngredient);
      }
      else{
        this.slService.addIngredient(newIngredient);
      }
      this.editMode=false;
      form.reset();
  }
  ngOnInit() {

     this.subscription = this.slService.startedEditingItem.subscribe(
       (index : number) => {
         this.editMode = true;
         this.editingItemIndex = index;
         this.editedItem = this.slService.getIngredientByIndex(index);
         this.slForm?.setValue({
           name : this.editedItem.Name,
           amount : this.editedItem.Amount
         })

       }
     )

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  onClear() {

    this.slForm?.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.DeleteIngredient(this.editingItemIndex);
    this.slForm?.reset();
  }



}
