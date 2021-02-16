import { Component, OnInit,Output } from '@angular/core'

import { EventEmitter } from 'protractor';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredients.model';
import { AddIngredientService } from './add-ingredient.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
 ingredients:Ingredient[]; 
 
 ngOnInit() {
  this.ingredients=this.Service.getIngredients();
  this.Service.ingredientChanged.subscribe(
    (ingredients : Ingredient[])=>
       {
          this.ingredients = ingredients;
      }
  )
}


  constructor(private Service: AddIngredientService) { 
  }
  OnEditIngredient(index :number){
    this.Service.ShoppingEdit.next(index);
  }
  
 

}
