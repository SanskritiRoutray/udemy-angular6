import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from "src/app/shoppinglist/shopping-list.service";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
  //providers: [ShoppingListService]
})
export class ShoppinglistComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Mango', 5)
  // ]

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    console.log(this.shoppingListService.getIngredient());
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

  // ingredientAdd(ingred : Ingredient) {
  //   console.log("ing"+ingred);
  //   this.ingredients.push(ingred);
  // }

}
