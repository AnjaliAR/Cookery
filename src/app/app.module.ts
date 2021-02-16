import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core'
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RouterEvent, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AddIngredientService } from './shopping/add-ingredient.service';
import { HomeComponent } from './home-component/home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingComponent,
    RecipesComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    HomeComponent,
    RecipeEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AddIngredientService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
