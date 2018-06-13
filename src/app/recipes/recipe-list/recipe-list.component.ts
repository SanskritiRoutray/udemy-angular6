import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe [] = [
    new Recipe('Test', 'Test Descr', 'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg'),
    new Recipe('Test', 'Test Descr', 'https://i.ndtvimg.com/i/2018-02/chicken-recipe_620x330_81517813176.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}