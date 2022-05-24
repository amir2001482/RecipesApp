import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { dropDownDirective } from './Shared/Dropdown.Directive';
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { ShopingEditComponent } from "./shoping-list/shoping-edit/shoping-edit.component";
import { shoppingListService } from './shoping-list/shopping-list.service';
import { appRouters } from './app-routers.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { CommonModule } from '@angular/common';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { recipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    dropDownDirective,
    ShopingListComponent,
    ShopingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRouters,
    CommonModule
  ],
  providers: [shoppingListService , recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
