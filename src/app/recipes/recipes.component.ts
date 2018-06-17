import { Component, OnInit } from '@angular/core';
import { RecipeService } from "src/app/recipes/recipe.service";
import { Recipe } from "src/app/recipes/recipe.model";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedInParent;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedInParent = recipe;
      }
    );
  }



}
