import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';



const appRoutes: Routes = [

/*  {path: '', redirectTo: '/recipes', pathMatch: 'full'},*/
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule'}, // lazy loading
  {path: 'shopping-list', component: ShoppingListComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
