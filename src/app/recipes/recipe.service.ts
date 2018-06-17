import { Recipe } from "src/app/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shoppinglist/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    getIngredients = new EventEmitter<Ingredient[]>();
    private recipes : Recipe [] = [
        new Recipe('Test', 
        'Test Descr', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LGIvkthPPFMPn6Pte66k_MsR14q8Et_5Kltn3kwfJ13FJkQV',
        [new Ingredient('Meat', 5),
         new Ingredient('flour', 1)]),
        new Recipe('Tes22t', 
        'Test2222 Descr', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LGIvkthPPFMPn6Pte66k_MsR14q8Et_5Kltn3kwfJ13FJkQV',
        [new Ingredient('Meat', 5),
         new Ingredient('flour', 1)])
      ];
    
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getIngredient(ingredient: Ingredient[]) {
        this.slService.addIngredients(ingredient);
    }
}