import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";
import { RecipeService } from "src/app/recipes/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() itemInDetail: Recipe;
  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
   
  }

  onAddToShoppinList() {
    this.recipesService.getIngredient(this.itemInDetail.ingredients);
  }

}
