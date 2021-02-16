import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router,ActivatedRoute} from "@angular/router";
import { relative } from 'path';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  subscription : Subscription;
  constructor(private recipeService : RecipeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe((
      recipes: Recipe[])=>{
        this.recipes=recipes;

      }
    );
    this.recipes = this.recipeService.getRecipe();
   
  }
  OnNewRecipe(){
    this.router.navigate(['new'], {relativeTo :  this.route});
  }
  onDestroy(){
    this.subscription.unsubscribe;
  }
}
