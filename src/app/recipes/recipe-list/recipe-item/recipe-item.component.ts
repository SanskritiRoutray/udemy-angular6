import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";
import { RecipeService } from "src/app/recipes/recipe.service";
//import { EventEmitter } from "@angular/core";
//import { Output } from "@angular/core";


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 // @Output() itemClicked= new EventEmitter<void>();
  @Input() element: Recipe;
  

  constructor(private recipeSelected: RecipeService) { }

  ngOnInit() {
  }

  onSelect(element) {
    console.log(element);
    this.recipeSelected.recipeSelected.emit(this.element);
    // console.log($event);
    // this.itemClicked.emit();
  }

}
