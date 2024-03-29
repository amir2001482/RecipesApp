import { Recipe } from './../recipe.model';
import { recipeService } from './../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id : number = 0;
  editmode = false;
  recipeForm : FormGroup;
  recipe? : Recipe;
  constructor(private  activeRoute : ActivatedRoute , private recipeService : recipeService , private router : Router) {

   }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      (params : Params) => {
        this.id = + params["id"];
        this.editmode  =  params["id"] != null;
        this.initForm();

      }
    )
  }

    private initForm(){
      let name = "";
      let imagePath = "";
      let description  = "";
      let recipeIngredients = new FormArray([]);
      if(this.editmode){

        this.recipe =  this.recipeService.getRecipeById(this.id);
        name = this.recipe.name;
        imagePath = this.recipe.imagePath;
        description = this.recipe.description;
        if(this.recipe["ingredients"]){

          for(let ingredient of this.recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                "name" : new FormControl(ingredient.name , Validators.required),
                "amount" : new FormControl(ingredient.amount , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            );
          }
        }
     }

    this.recipeForm = new FormGroup({
       "name" : new FormControl(name , Validators.required),
       "imagPath" : new FormControl(imagePath , Validators.required),
       "description" : new FormControl(description , Validators.required),
       "ingredients" : recipeIngredients

    })
   }
   onSubmit(){
     if(this.editmode){
       if(this.recipeForm){
        console.log(this.recipeForm.value)
        this.recipeService.updateRecipe(this.id , this.recipeForm.value);

       }

     }

     else{

        // this.recipe = new Recipe(this.recipeForm.value["name"] , this.recipeForm.value["description"] , this.recipeForm.value["imagPath"] , this.recipeForm.value["ingredients"])
        if(this.recipeForm){
          console.log(this.recipeForm.value)
          this.recipeService.addRecipe(this.recipeForm.value);
       }
        }

     this.onCancel();

   }


    get controls(){

        if(this.recipeForm){
          const controls =  (<FormArray>this.recipeForm.get("ingredients")).controls;
          return controls;
        }
        return null


   }


    onAddIngredient(){
      if(this.recipeForm){
        (<FormArray>this.recipeForm.get("ingredients")).push(
          new FormGroup({
            "name" : new FormControl(null , Validators.required),
            "amount" : new FormControl(null , [Validators.required , Validators.pattern(/^[0-9]+[1-9]*$/)])
          })
        );
      }


    }

    onCancel(){

      this.router.navigate(["../"] , {relativeTo:this.activeRoute});
    }

    onDeleteIngredient(index : number){
      if(this.recipeForm)
        (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
    }

}
