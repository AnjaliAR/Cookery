import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private recipeService: RecipeService, private http: HttpClient) { }
  saveRecipes(): void {
    this.http.put("https://recipebook-c4112.firebaseio.com/recipe.json", this.recipeService.getRecipe()).subscribe(res => {
      let recipes = res;
      console.log(recipes);
      return recipes
    })
  }
}
