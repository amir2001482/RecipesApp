
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRouters
{

}
