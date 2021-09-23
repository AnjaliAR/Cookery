import { Injectable } from '@angular/core';
import  { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { AddIngredientService } from '../shopping/add-ingredient.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes:Recipe[] = [
    new Recipe('A Big Fat Burger',
    'super-tasty!!!!',
    'https://assets.bonappetit.com/photos/57acae2d1b33404414975121/16:9/w_2560,c_limit/ultimate-veggie-burger.jpg',
    [
      new Ingredient('buns',2),
      new Ingredient('meat',1)
    ]),
    new Recipe('Ham Sandwich',
    'Worlds Greatest Hum Sandwich',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/2/2/RX-FNM_040111-Mayo-026_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539804848.jpeg',
    [
        new Ingredient('bread',2),
        new Ingredient('chicken',1)
    ])];

  constructor(private Service:AddIngredientService) { }
  
  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipe(){
    return this.recipes.slice();
  }
  getRecipes(index:number){
    return this.recipes.slice()[index];
  }
  onAddIngredientToList(ingredient : Ingredient[]){
    this.Service.addIngredient(ingredient);
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(newRecipe:Recipe,index:number){
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
