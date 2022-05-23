import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id? : number;
  editmode = false;
  constructor(private  activeRoute : ActivatedRoute) {

   }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      (params : Params) => {
        this.id = + params["id"];
        this.editmode  =  params["id"] != null;
        console.log(this.editmode);

      }
    )
  }

}
