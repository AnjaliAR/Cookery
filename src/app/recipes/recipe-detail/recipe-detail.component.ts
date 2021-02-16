import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Routes, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private Service: RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];
      this.recipe = this.Service.getRecipes(this.id);
    });
  }
  onAddToShoppingList() {
      this.Service.onAddIngredientToList(this.recipe.ingredients);
  }
  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo : this.route});
  }
  onDelete(){
    this.Service.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }


}
