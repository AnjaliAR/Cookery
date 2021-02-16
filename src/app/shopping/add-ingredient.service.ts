import * as core from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@core.Injectable({
  providedIn: 'root'
})

export class AddIngredientService {
    private ingredients:Ingredient[]=[
    new Ingredient("apples",5),
    new Ingredient("tomatoes",10)
  ];
  ShoppingEdit = new Subject<number>()

  @core.Output() ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }
  
  getIngredients(){
    return this.ingredients.slice();
  }

  getEditIngredient(index:number){
    return this.ingredients[index];
  }
  
  addNewIngredient(ingredient : Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientChanged.emit(this.ingredients.slice());
  }
  
  addIngredient(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  updateIngredient(index:number, newIngredient :Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
 
  DeleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());

  }
}
