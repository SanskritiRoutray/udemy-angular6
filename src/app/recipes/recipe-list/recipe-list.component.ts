import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
//import { Output } from "@angular/core";
//import { EventEmitter } from "@angular/core";
import { RecipeService } from "src/app/recipes/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];
 // @Output() selectedItem = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // recipeSelected(recipe: Recipe) {
  //   console.log("recipeselected" + recipe);
  //   this.selectedItem.emit(recipe);
  // }

}
