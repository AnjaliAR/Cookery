import { Component, OnInit, Output, Input, ViewChild,Inject, OnDestroy } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingComponent } from '../shopping.component';
import { NgModule }      from '@angular/core';
import { NgForm }   from '@angular/forms';
import { AddIngredientService } from '../add-ingredient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm : NgForm;
 subscribe:Subscription;
 editMode = false;
 editModeIndex :number;
 edittedItem :Ingredient;
  constructor(private service: AddIngredientService){
  }

  onAdded(form : NgForm)
  {
    const value=form.value;
    const newIngredient= new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.service.updateIngredient(this.editModeIndex,newIngredient);
    }
    else
    this.service.addNewIngredient(newIngredient);
    this.editMode=false;
    form.reset();
  
  }
  onDelete(){
    this.service.DeleteIngredient(this.editModeIndex);
    this.onClear();
  }
  onClear()
  {
    this.slForm.reset();
    this.editMode = false;
  }
  
  
   

  ngOnInit() {
    this.subscribe = this.service.ShoppingEdit.subscribe(
      (index:number) =>{
      this.editMode=true;
      this.editModeIndex=index;
      this.edittedItem = this.service.getEditIngredient(index);
      this.slForm.setValue({
        name : this.edittedItem.name,
        amount : this.edittedItem.amount
         }
      
         )
      
      }
    );
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
