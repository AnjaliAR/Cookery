import { Ingredient } from '../shared/ingredients.model';


export class Recipe{
name:string;
description:string;
image:string;
ingredients:Ingredient[];

constructor(name:string,desc:string,image:string,ingredient:Ingredient[]){
    this.name=name;
    this.description=desc;
    this.image=image;
    this.ingredients=ingredient;
}

}