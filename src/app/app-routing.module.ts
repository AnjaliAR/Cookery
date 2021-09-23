import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { HomeComponent } from './home-component/home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth-component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'' , component:HomeComponent},
    
    {path:'recipes',component:RecipesComponent, children: [
      {path:'',component:RecipeStartComponent},
      {path: 'new',component:RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent},
       {path: ':id/edit',component:RecipeEditComponent}
    ]},
    {path:'shopping',component:ShoppingComponent},
    {path:'login', component:AuthComponent}
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
