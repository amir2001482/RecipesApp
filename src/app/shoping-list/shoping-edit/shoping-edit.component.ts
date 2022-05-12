import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../Ingredient';
import { shoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  constructor(private slService: shoppingListService)
  {
    
  }
  @ViewChild("inputName") InputName? : ElementRef;
  @ViewChild("inputAmount") InputAmount? : ElementRef;
 
  addIngredient()
  {
    if (this.InputName != null && this.InputAmount != null )
    {
      const ingName = this.InputName.nativeElement.value;
      const ingAmount = this.InputAmount.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.slService.addIngredient(newIngredient);
    }
    
    
     
    
    
  }
  ngOnInit(): void {}

}
