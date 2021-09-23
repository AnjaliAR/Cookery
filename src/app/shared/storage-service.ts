import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root'
  })
export class storageService {
    
    constructor(private http : HttpClient, private recipeService : RecipeService){
        
    }
    storeRecipes(){
        const recipes = this.recipeService.getRecipe();
        return this.http.put('https://recipebook-c4112.firebaseio.com/recipes.json', recipes).subscribe(recipeData =>{
            console.log(recipeData);
        });
}
FetchRecipes(){
    this.http.get<Recipe[]>('https://recipebook-c4112.firebaseio.com/recipes.json').subscribe(recipeData => {
        console.log(recipeData);
        this.recipeService.setRecipes(recipeData);
    })
}
}
