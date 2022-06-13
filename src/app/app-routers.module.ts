
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: "", redirectTo: "/recipes", pathMatch:"full" },
  {path : "recipes" , loadChildren : () => import("./recipes/recipe.module").then(x=>x.RecipeModule)},
  {path : "shopping-list" , loadChildren : () => import("./shoping-list/shopping-list.module").then(x=>x.ShoppingListModule)},
  {path : "auth" , loadChildren : () => import("./auth/auth.module").then(x=>x.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes , {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class appRouters
{

}
